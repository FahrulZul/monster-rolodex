import "./App.css";
import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";

export type Monster = {
    id: string;
    name: string;
    email: string;
};

const App = () => {
    const [searchField, setSearchField] = useState("");
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [filteredMonsters, setFiteredMonsters] = useState(monsters);

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldStr = event.target.value.toLowerCase();
        setSearchField(searchFieldStr);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getData<Monster[]>(
                "https://jsonplaceholder.typicode.com/users"
            );
            setMonsters(users);
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        });
        setFiteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    return (
        <div className="App">
            <div className="container">
                <h1 className="app-title">Monster Rolodex</h1>
                <div className="search-container">
                    <SearchBox
                        className="search-box-monster"
                        type="search"
                        placeholder="Search Monster"
                        onChangeHandler={onSearchChange}
                    />
                </div>
                <CardList monsters={filteredMonsters} />
            </div>
        </div>
    );
};

// class App extends Component {
//     constructor() {
//         super();

//         this.state = {
//             monsters: [],
//             searchField: "",
//         };
//     }

//     componentDidMount() {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then((users) =>
//                 this.setState(() => {
//                     return {
//                         monsters: users,
//                     };
//                 })
//             );
//     }

//     onSearchChange = (event) => {
//         const searchField = event.target.value.toLowerCase();
//         this.setState(() => {
//             return { searchField };
//         });
//     };

//     render() {
//         const { monsters, searchField } = this.state;
//         const { onSearchChange } = this;

//         const filteredMonsters = monsters.filter((monster) => {
//             return monster.name.toLowerCase().includes(searchField);
//         });

//         return (
//             <div className="App">
//                 <div className="container">
//                     <h1 className="app-title">Monster Rolodex</h1>
//                     <div className="search-container">
//                         <SearchBox
//                             className="search-box-monster"
//                             type="search"
//                             placeholder="Search Monster"
//                             onChangeHandler={onSearchChange}
//                         />
//                     </div>
//                     <CardList monsters={filteredMonsters} />
//                 </div>
//             </div>
//         );
//     }
// }

export default App;
