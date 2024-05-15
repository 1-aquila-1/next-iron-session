"use server"

import { SessionData, defaultSession,  } from "@/session";
import { SessionOptions, getIronSession } from "iron-session";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { env } from "process";

export async function getSession() {
  const sessionOptions = await obterSessionOptions()
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
}

export const setSession = async (userId: string) => {
  const sessionOptions = await obterSessionOptions()
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  session.userId = userId
  session.token = "token-auth-1q2w3e"
  session.isLoggedIn = true
  await session.save()
  redirect("/")
}

export async function logout() {
  const sessionOptions = await obterSessionOptions()
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  session.destroy()
  redirect("/auth")
}


export const obterSessionOptions = async () =>{
  let d = ""
  const h = headers()
  const domain =  h.get("host")
  if (domain){
    if(domain.includes("localhost:")){
      d = "." + domain.split(":")[0].replaceAll("//","")
    }else{
      d = ".wiggles.com.br"
    }
  }
  const sessionOptions: SessionOptions = {
    password: "@B0uSiii>e|;Xf5+H69ECY04&5k|QZ90",
    cookieName: "token-auth",
    cookieOptions: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      domain: d,
    },
  };
  
  return sessionOptions
}
