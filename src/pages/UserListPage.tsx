import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { User } from '../types/User';

export default function UserListPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/users')
      .then(res => setUsers(res.data))
      .catch(err => {
        setError('유저 목록을 불러올 수 없습니다.');
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>유저 목록</h1>
      {error && <p>{error}</p>}
      {!error && users.length === 0 && <p>등록된 유저가 없습니다.</p>}
      <ul>
        {users.map(user => (
          <li key={user.email}>
            <strong>{user.name}</strong> ({user.email}) - {user.provider} / {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
