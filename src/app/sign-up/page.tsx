import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 rounded-3xl shadow-xl w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
          Sign Up
        </h2>
        <SignUp routing="hash" />
      </div>
    </div>
  );
}
