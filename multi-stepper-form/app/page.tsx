import LogoutButton from "@/components/auth/logout-button";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Authenticated</h1>
      <LogoutButton />
    </div>
  );
}
