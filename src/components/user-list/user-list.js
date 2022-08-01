import './user-list.css';

import UserListItem from "../user-list-item/user-list-item";

const UserList = () => {
    return (
      <ul className={'app-list list-group'}>
        <UserListItem />
        <UserListItem />
        <UserListItem />
      </ul>
    );
}

export default UserList;