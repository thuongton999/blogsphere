import { useState } from "react";
import Modal from "../src/components/Modal";
import {
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  logOut
} from "../src/modules/FireAuth";

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
      <br />{query}
      <br />
      <br />{user}
      <Modal>
        Ad irure officia deserunt nisi Lorem duis culpa labore eiusmod amet ad anim ea. Ut in veniam esse in non consequat ullamco cillum pariatur Lorem. Voluptate labore est ea elit eu excepteur cupidatat pariatur labore commodo. Lorem nisi amet laborum nisi in et quis labore cupidatat anim eu ad ullamco. Quis laboris adipisicing velit duis ullamco aute aute duis adipisicing ullamco. Aliqua voluptate quis eiusmod amet consectetur nulla nisi. Culpa anim nulla consequat voluptate quis eiusmod qui tempor.

        Occaecat labore occaecat nulla occaecat minim laborum ut et dolore ea. Mollit cupidatat ex ex non tempor consequat tempor irure eiusmod nostrud sint exercitation. Duis proident eiusmod aute sunt magna cupidatat cupidatat laborum proident eiusmod ut officia tempor. Culpa id duis culpa in consequat laboris magna nostrud.
      </Modal>
    </>
  )
}
