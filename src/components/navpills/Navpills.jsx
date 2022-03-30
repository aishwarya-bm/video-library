import { Link } from "react-router-dom";

export default function Navpills() {
  return (
    <>
      <div className="nav-pills d-flex">
        <ul className="list list-no-bullet children-center">
          <li className="list-item">
            <Link to="/signup" className="btn btn-link nav-btn ">
              LOGIN
            </Link>
          </li>

          <li className="list-item nav-item">
            <Link to="/" className="fa fa-solid fa-home"></Link>
          </li>
          <li className="list-item nav-item">
            <span className="badge-icon p-rel">
              <Link to="/wishlist">
                <i className="fa fa-solid fa-heart nav-btn"></i>
              </Link>
            </span>
          </li>
          <li className="list-item nav-item">
            <span className="badge-icon p-rel">
              <Link to="/cart">
                <i className="fa fa-shopping-cart nav-btn"></i>
              </Link>
            </span>
          </li>
        </ul>

        <Link to="/signup">
          <i className="fa fas fa-sign-out-alt btn btn-link nav-btn"></i>
        </Link>
      </div>
    </>
  );
}
