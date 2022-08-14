import "./App.css";
import { Component } from "react";
class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) =>
                this.setState(
                    () => {
                        return {
                            monsters: users,
                        };
                    },
                    () => {
                        console.log(this.state.monsters);
                    }
                )
            );
    }

    render() {
        const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(this.state.searchField);
        });

        return (
            <div className="App">
                <input
                    className="search-box"
                    type="text"
                    onChange={(event) => {
                        const searchField = event.target.value.toLowerCase();
                        this.setState(() => {
                            return { searchField };
                        });
                    }}
                />
                <ul className="list-container">
                    {filteredMonsters.map((monster) => (
                        <li key={monster.id}>{monster.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
