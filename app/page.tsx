import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex h-full items-center justify-center flex-col">
      <h1 className="text-xl">Home Page</h1>

      <p>{session?.user?.email}</p>
    </main>
  );
}
