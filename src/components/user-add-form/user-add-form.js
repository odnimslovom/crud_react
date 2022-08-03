import {Component} from "react";

import './user-add-form.css';

class UserAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onChangeValue = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }


    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавить нового сотрудника</h3>
                <form className={'add-form d-flex'}>
                    <input type={'text'}
                           name="name"
                           value={name}
                           className={'form-control new-post-label'}
                           placeholder={'Как зовут?'}
                           onChange={this.onChangeValue}
                    />
                    <input type={'number'}
                           name="salary"
                           value={salary}
                           className={'form-control new-post-label'}
                           placeholder={'З/п в $ ?'}
                           onChange={this.onChangeValue}
                    />

                    <button type={'submit'}
                            className={'btn btn-outline-light'}
                            onClick={this.onSubmit}
                    >Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default UserAddForm;