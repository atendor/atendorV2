import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-base-200">
      <h1 className="text-3xl font-bold mb-6">React Design System Test Page</h1>
      <Card className="w-full max-w-md p-6">
        <form className="flex flex-col gap-4">
          <Input placeholder="Your email..." type="email" />
          <Input placeholder="Your name..." type="text" />
          <Button type="submit">Test Button</Button>
        </form>
      </Card>
    </main>
  );
}
