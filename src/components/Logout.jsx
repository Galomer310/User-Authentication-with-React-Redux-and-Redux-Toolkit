import { logOutUser } from "./state/slice";
import { useDispatch } from "react-redux";

const LogOut = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOutUser());
    }

    return (
        <div>
            <h1>LogOut</h1>
            <button onClick={handleLogout}>Logout</button>  
        </div>
    )
}

export default LogOut;
