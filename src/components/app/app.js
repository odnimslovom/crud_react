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
                {id: nanoid(), name: "John B.", rise: true, increase: false, salary: 900},
                {id: nanoid(), name: "Alex A.", rise: false, increase: false, salary: 1800},
                {id: nanoid(), name: "Sarah C.", rise: false, increase: false, salary: 2800},
                {id: nanoid(), name: "Drew P.", rise: false, increase: true, salary: 3600},
            ],
            term : '',
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
            rise: false,
            salary: salary,
        }
        this.setState(({data}) => ({
            data: [...data, newUser]
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, [prop]: !item[prop]};
                    }
                    return item;
                })
            })
        )
    }

    searchUser = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    render() {

        const {data, term} = this.state;

        const amountUsers = this.state.data.length;
        const premiumUsers = this.state.data.filter(item => item.increase).length;

        const renderedData = this.searchUser(data, term);

        return (
            <div className="app">
                <AppInfo amountUsers={amountUsers}
                         premiumUsers={premiumUsers}
                />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter/>
                </div>
                <UserList data={renderedData}
                          onDelete={this.deleteItem}
                          onToggleProp={this.onToggleProp}
                />
                <UserAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;