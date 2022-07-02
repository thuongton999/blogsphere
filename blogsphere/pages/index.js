import { useState } from "react";
import Modal from "../src/components/Modal";
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
      Tempor voluptate ex qui in amet irure et ex eiusmod irure sunt. Occaecat dolore qui in do tempor esse consectetur tempor esse duis. Voluptate laborum laborum pariatur labore id exercitation id est duis voluptate qui et. Consequat consequat consectetur dolore proident labore. Cillum ipsum aute sint consequat. Consequat do aliqua ipsum pariatur proident ut voluptate voluptate. Incididunt occaecat sit deserunt laborum consectetur voluptate nostrud pariatur sint incididunt reprehenderit.

      Aute laborum incididunt velit in duis est enim magna laboris. Fugiat pariatur consectetur cupidatat consectetur ullamco ea occaecat sint nisi veniam. Quis reprehenderit ut id minim veniam et. Ad dolore dolore et non incididunt cupidatat officia ex consequat qui ex velit sint anim. Aliquip ipsum magna voluptate ea velit laboris cupidatat aute eiusmod do nisi. Nulla ut duis pariatur in elit et tempor in culpa ex.
      <Modal>
        <button onClick={register}>Register</button>
        <button onClick={signin}>Login</button>
        <button onClick={signout}>Logout</button>
        <br/>{query}
        <br/>
        <br/>{user}
      </Modal>
    </>
  )
}
