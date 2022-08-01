import './app.css';

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import UserList from "../user-list/user-list";
import UserAddForm from "../user-add-form/user-add-form";

const App = () => {
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <UserList />
            <UserAddForm />
        </div>
    )
}

export default App;