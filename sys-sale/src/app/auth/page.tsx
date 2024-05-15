import { redirect } from "next/navigation";
import { getSession } from "@/action/auth.action";
import AuthPage from "./auth.page";

export default async function Auth() {

  const session = await getSession()
  if (session.isLoggedIn) {
    return redirect("/")
  }
  return <AuthPage />
}
