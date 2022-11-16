import React, { useEffect, useState } from 'react';

import User from '../../components/user/user.component';

import './userpage.style.scss';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response) => {
        setUsers(response);
      });
  }, []);

  return (
    <div className="userspage">
      <div className="list-header">
        <div className="photo">Photo</div>
        <div className="username">Username</div>
        <div className="name">Full name</div>
        <div className="website">Website</div>
        <div className="details">Details</div>
      </div>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UsersPage;
