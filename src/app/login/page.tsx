import AuthForm from '@/components/AuthForm';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <AuthForm isLogin />
      </div>
    </main>
  );
}
