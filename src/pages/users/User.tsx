// 'use client'

import { useEffect, useReducer } from 'react';
import Spacer from '../../components/spacer';
import userReducer, { userInitialState } from '../../reducer/user-reducer';
import { User } from '../../model/user';
import { Link, Params, useParams } from 'react-router';
import { Table } from 'react-bootstrap';

interface RouteParams extends Params {
  userId: string
};

export default function Page() {
  const [user, dispatch] = useReducer(userReducer, userInitialState);

  const params = useParams<RouteParams>();

  console.log(`User ID: ${params.userId}`);

  useEffect(() => {
    async function fetchUser(userId: string) {
      const user: User = {
        id: Number(userId),
        firstName: 'John',
        lastName: 'Doe',
        age: 31,
        weight: 183.7,
        smoker: false
      };

      if (!user) return;

      dispatch({ type: 'SET_USER', payload: user })
    }

    if (!params.userId) return;

    fetchUser(params.userId);
  }, [params.userId]);

  if (!user || !params.userId) return null;

  return (
    <>
      <h1>User</h1>

      <Link className="me-auto" to="/users">Back</Link>

      <Spacer />

      <Table variant='dark' size="md" responsive striped hover className="show-table">
        <tbody>
          <tr>
            <th>ID</th>
            <td>{user.id}</td>
          </tr>
          <tr>
            <th>First Name</th>
            <td>{user.firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{user.lastName}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{user.age}</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{user.weight}</td>
          </tr>
          <tr>
            <th>Smoker</th>
            <td>{user.smoker ? 'True' : 'False'}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
