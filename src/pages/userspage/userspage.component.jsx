import React, { useEffect, useState } from 'react';
import Loader from '../../components/loader/loader.component';

import User from '../../components/user/user.component';

import { getUsers } from '../../api/service';

import './userpage.style.scss';

const UsersPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((response) => setUsers(response))
      .finally(() => setIsLoading(false));
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
      {isLoading ? (
        <Loader />
      ) : (
        users.map((user) => {
          return <User key={user.id} user={user} />;
        })
      )}
    </div>
  );
};

export default UsersPage;
