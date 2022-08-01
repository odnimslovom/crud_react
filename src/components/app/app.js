import './app.css';

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import UserList from "../user-list/user-list";
import UserAddForm from "../user-add-form/user-add-form";
import {nanoid} from "nanoid";

const App = () => {

    const data = [
        {id: nanoid(), name: "John B.", increase: false, salary: 900},
        {id: nanoid(), name: "Alex K.", increase: false, salary: 1800},
        {id: nanoid(), name: "Drew P.", increase: true, salary: 3600},
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <UserList data={data}/>
            <UserAddForm/>
        </div>
    )
}

export default App;