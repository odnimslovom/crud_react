import {Component} from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import UserList from "../user-list/user-list";
import UserAddForm from "../user-add-form/user-add-form";
import {nanoid} from "nanoid";
import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: nanoid(), name: "John B.", increase: false, salary: 900},
                {id: nanoid(), name: "Alex K.", increase: false, salary: 1800},
                {id: nanoid(), name: "Drew P.", increase: true, salary: 3600},]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    addItem = (name, salary) => {
        const newUser = {
            id: nanoid(),
            name: name,
            increase: false,
            salary: salary,
        }
        this.setState(({data}) => ({
            data: [...data, newUser]
        }))
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <UserList data={this.state.data}
                          onDelete={this.deleteItem}
                />
                <UserAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;