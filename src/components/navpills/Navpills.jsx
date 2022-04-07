import { Link } from "react-router-dom";
import { useLogin } from "../../contexts";
import { signoutUser } from "../../contexts/login-context/login-utils";
export function Navpills() {
  const { isLoggedIn, dispatchUser } = useLogin();
  return (
    <>
      <div className="nav-pills d-flex">
        <ul className="list list-no-bullet children-center">
          {!isLoggedIn && (
            <li className="list-item">
              <Link to="/signup" className="btn btn-link nav-btn ">
                LOGIN
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <>
              <li>
                <Link to="/">
                  <i className="fa fas fa-user btn btn-link nav-btn" />
                </Link>
              </li>
              <Link to="/signup">
                <i
                  className="fa fas fa-sign-out-alt btn btn-link nav-btn"
                  onClick={() => signoutUser(dispatchUser)}
                ></i>
              </Link>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
