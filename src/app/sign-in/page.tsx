// app/sign-in/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
          Sign In
        </h2>
        <SignIn />
      </div>
    </div>
  );
}
