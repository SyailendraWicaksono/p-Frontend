import AuthForm from '@/components/AuthForm';

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <AuthForm />
      </div>
    </main>
  );
}
