import './user-list.css';

import UserListItem from "../user-list-item/user-list-item";

const UserList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <UserListItem key={id} {...itemProps} />
        );
    });

    return (
        <ul className={'app-list list-group'}>
            {elements}
        </ul>
    );
}

export default UserList;