import './user-add-form.css';

const UserAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавить нового сотрудника</h3>
            <form className={'add-form d-flex'}>
                <input type={'text'}
                       className={'form-control new-post-label'}
                       placeholder={'Как зовут?'}/>
                <input type={'number'}
                       className={'form-control new-post-label'}
                       placeholder={'З/п в $ ?'}/>

                <button type={'submit'}
                        className={'btn btn-outline-light'}>Добавить
                </button>
            </form>
        </div>
    )
}

export default UserAddForm;