import { useState } from "react";
import { 
  registerWithEmailAndPassword, 
  logInWithEmailAndPassword,
  logOut } 
  from "../src/modules/FireAuth";

export default function Home() {
  const [query, setQuery] = useState();
  const [user, setUser] = useState();

  const email = "thuongton0809999@gmail.com";
  const password = "jsahfasfafh";

  const register = async () => {
    const query = await registerWithEmailAndPassword(email, password);
    setQuery(JSON.stringify(query));
    setUser(JSON.stringify(query?.mdata));
  }
  const signin = async () => {
    const query = await logInWithEmailAndPassword(email, password);
    setQuery(JSON.stringify(query));
    setUser(JSON.stringify(query?.mdata));
  }
  const signout = async () => {
    const query = await logOut();
    setQuery(JSON.stringify(query));
    setUser(JSON.stringify(query?.mdata));
  }

  return (
    <>
      <button onClick={register}>Register</button>
      <button onClick={signin}>Login</button>
      <button onClick={signout}>Logout</button>
      <br/>{query}
      <br/>
      <br/>{user}
    </>
  )
}
