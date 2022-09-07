import './user-list.css';

import UserListItem from "../user-list-item/user-list-item";

const UserList = ({data, onDelete, onAdd, onToggleProp, onChangeSalary}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <UserListItem key={id}
                          id={id}
                          {...itemProps}
                          onDelete={() => onDelete(id)}
                          onChangeSalary={onChangeSalary}
                          onAdd={() => onAdd}
                          onToggleProp={
                              (evt) => onToggleProp(id, evt.currentTarget.getAttribute('data-toggle'))
                          }
            />
        );
    });

    return (
        <ul className={'app-list list-group'}>
            {elements}
        </ul>
    );
}

export default UserList;