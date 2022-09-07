import './app-filter.css'

import {Component} from "react";

class AppFilter extends Component {

    render() {

        const buttonsData = [
            {name: 'all-users', label: 'Все сотрудники'},
            {name: 'increase-users', label: 'На повышение'},
            {name: 'over-salary', label: 'З/п > 1000$'},
        ];

        const buttons = buttonsData.map(({name, label}) => {
            const isActive = this.props.filter === name;
            const clazz = isActive ? "btn-light" : "btn-outline-light";
            return <button key={name}
                           className={`btn ${clazz}`}
                           onClick={() => this.props.onUpdateFilter(name)}
                           name={name}>
                {label}
            </button>
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

export default AppFilter;