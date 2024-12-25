import { useDispatch } from "react-redux";
import { useRef } from "react";
import { setUser, loginUser } from "./state/slice";


const Login = () => {
    const dispatch = useDispatch();
    const userRef = useRef();
    const passwordRef = useRef();

    const handleLogin = (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    dispatch(setUser({ user, password }));
    dispatch(loginUser({ user, password }));
    userRef.current.value = "";
    passwordRef.current.value = "";
    };

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>Username</label>
                <input type="text" ref={userRef}/>
                <label>Password</label>
                <input type="password" ref={passwordRef}/>
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login;
