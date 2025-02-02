import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function ProtectedPage() {
  const { userId } = await auth(); // ✅ Await the auth() function

  if (!userId) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">Access Denied</h1>
        <p className="text-gray-600">You must be logged in to view this page.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-green-500">Welcome to the Protected Page!</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
