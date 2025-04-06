import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  name: string;
  email: string;
}

const Test = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<User[]>('/api/auth/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('유저 목록 불러오기 실패:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>로딩 중...</p>;

  return (
    <div>
      <h2>유저 목록</h2>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
