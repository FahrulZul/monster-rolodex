import "./App.css";
import { Component } from "react";
class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
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
        return (
            <div className="App">
                <ul>
                    {this.state.monsters.map((monster) => (
                        <li key={monster.id}>{monster.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
