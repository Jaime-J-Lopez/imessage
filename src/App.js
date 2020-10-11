import React, { useEffect } from 'react';
import './App.css';
import Imessage from "./Imessage";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                // User is logged in //
            } else {
                // User is logged out //
            }
        })
    }, [])

  return (
    <div className="app">
        {user ?  <Imessage /> : <Login />}
    </div>
  );
}

export default App;
