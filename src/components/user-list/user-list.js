import './user-list.css';

import UserListItem from "../user-list-item/user-list-item";

const UserList = ({data, onDelete, onAdd}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <UserListItem key={id}
                          {...itemProps}
                          onDelete={() => onDelete(id)}
                          onAdd={() => onAdd}
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