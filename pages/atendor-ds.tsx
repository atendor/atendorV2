import { useState, useEffect, FormEvent } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

const USER = process.env.NEXT_PUBLIC_DS_USER || 'admin';
const PASS = process.env.NEXT_PUBLIC_DS_PASS || 'password';

export default function AtendorDesignSystem() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('ds-auth') === '1') {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username === USER && password === PASS) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('ds-auth', '1');
      }
      setAuthenticated(true);
    } else {
      setError('Invalid credentials');
    }
  };

  if (!authenticated) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-base-200">
        <h1 className="text-3xl font-bold mb-6">Design System Login</h1>
        <Card className="w-full max-w-md p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <span className="text-red-500">{error}</span>}
            <Button type="submit">Sign in</Button>
          </form>
        </Card>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-base-200">
      <h1 className="text-3xl font-bold mb-6">Atendor Design System</h1>
      <Card className="w-full max-w-md p-6">
        <p className="text-center">Welcome to the design system.</p>
      </Card>
    </main>
  );
}
