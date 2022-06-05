import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "redux-reducers";
import { useToast } from "custom-hooks";
import { useTheme } from "theme-context";
import { VisibilityIcon, VisibilityOffIcon, loginImg } from "assets";

const LoginPage = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname ?? "/feed";

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginError, setLoginError] = useState("");

  const testLogin = {
    username: "guestguest",
    password: "Guest123",
  };

  const loginSubmitHandler = async (user) => {
    try {
      const response = await dispatch(loginUser(user));
      if (response?.error) {
        throw new Error(error);
      }
      if (response?.payload.encodedToken) {
        showToast("success", "Logged in successfully.");
        navigate(from, { replace: true });
      }
    } catch (error) {
      showToast("error", "Can't login. Recheck details and try again.");
      setLoginError("Login failed.");
    }
  };

  const testLoginHandler = async (user) => {
    setUser(testLogin);
    loginSubmitHandler(user);
  };
  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div
        className={
          theme === "light"
            ? "card card0 border-0"
            : "card card0 border-0 bg-dark"
        }
      >
        <div className="flex-row-centre">
          <div className="col-lg-6">
            <div className="card1">
              <div className="row px-3 mt-4 mb-5 border-line">
                <img
                  src={loginImg}
                  className="login-image"
                  alt="image of map and camera"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              className={
                theme === "light"
                  ? "card2 card border-0 px-4 py-5"
                  : "card2 card border-0 px-4 py-5 bg-dark"
              }
              onSubmit={(e) => {
                e.preventDefault();
                loginSubmitHandler(user);
              }}
            >
              <div className="flex-col px-3">
                <label htmlFor="username" className="mb-1 input-required">
                  <p className="mb-1 text-sm d-inline">Username</p>
                </label>
                <input
                  className="mb-4 input-field p-1"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter a username"
                  required
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </div>
              <div className="flex-col px-3 position-relative hide-pswrd">
                <label htmlFor="password" className="mb-1 input-required">
                  <p className="mb-1 text-sm d-inline">Password</p>
                </label>
                <input
                  id="password"
                  className="input-field p-1"
                  name="password"
                  type={`${passwordVisible ? "text" : "password"}`}
                  placeholder="Enter password"
                  required
                  maxLength="20"
                  minLength="6"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <button
                  className="hide-pass-btn btn-no-decor"
                  onClick={(e) => {
                    e.preventDefault();
                    setPasswordVisible(!passwordVisible);
                  }}
                >
                  {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
              </div>
              {loginError !== "" && (
                <p className="flex-col px-3 text-danger">{loginError}</p>
              )}
              <div className="flex-col mb-3 px-3 my-4">
                <button type="submit" className="btn btn-info text-center">
                  Login
                </button>
              </div>
              <div className="flex-col mb-3 px-3">
                <button
                  type="button"
                  className="btn btn-info text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    testLoginHandler(testLogin);
                  }}
                >
                  Login with test credentials
                </button>
              </div>
              <div className="flex-col mb-4 px-3">
                <small className="font-weight-bold">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-secondary">
                    Sign up here
                  </Link>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
