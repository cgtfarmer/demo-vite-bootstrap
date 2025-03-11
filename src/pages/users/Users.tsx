// 'use client'

import { useEffect, useReducer } from 'react';
import Table from 'react-bootstrap/Table';
import usersReducer, { usersInitialState } from '../../reducer/users-reducer';
import { User } from '../../model/user';
import { Link } from 'react-router';

export default function Page() {
  const [users, dispatch] = useReducer(usersReducer, usersInitialState);

  useEffect(() => {
    async function fetchUsers() {
      const users: User[] = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          age: 31,
          weight: 183.7,
          smoker: false
        },
        {
          id: 2,
          firstName: 'Jane',
          lastName: 'Doe',
          age: 29,
          weight: 151.5,
          smoker: false
        },
        {
          id: 3,
          firstName: 'John',
          lastName: 'Smith',
          age: 44,
          weight: 215.3,
          smoker: true
        },
        {
          id: 4,
          firstName: 'Jane',
          lastName: 'Smith',
          age: 41,
          weight: 183.4,
          smoker: false
        },
        {
          id: 5,
          firstName: 'Chad',
          lastName: 'Smith',
          age: 18,
          weight: 171.6,
          smoker: false
        }
      ];


      dispatch({ type: 'SET_USERS', payload: users })
    }

    fetchUsers();
  }, []);

  const rows = [];
  for (const user of users) {
    const key = `${user.id}`;

    const row = (
      <tr key={key}>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.age}</td>
        <td>{user.weight}</td>
        <td>{user.smoker ? 'True' : 'False'}</td>
        <td className="d-flex gap-2">
          <Link to={`/users/${user.id}`}>Show</Link>
        </td>
      </tr>
    );

    rows.push(row);
  }

  return (
    <>
      <h1 className="my-4 text-2xl">Users</h1>

      <Table responsive="md" variant='dark' striped hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Smoker</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>
      </Table>
    </>
  );
}
