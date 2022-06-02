import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "redux-reducers";
import { useToast } from "custom-hooks";
import { useTheme } from "theme-context";
import { VisibilityIcon, VisibilityOffIcon, signupImg } from "assets";

const SignupPage = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname ?? "/feed";

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassVisible, setConfirmPassVisible] = useState(false);
  const [signupError, setSignupError] = useState("");

  const singupSubmitHandler = async (user) => {
    try {
      const response = await dispatch(signupUser(user));
      if (response?.error) {
        throw new Error(error);
      }
      if (response?.payload.encodedToken) {
        showToast("success", "Signed up and logged in successfully.");
        navigate(from, { replace: true });
      }
    } catch (error) {
      showToast("error", "Can't sign up. Recheck details and try again.");
      setSignupError("Sign up failed.");
    }
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
          <div className="col-lg-6 border-line">
            <form
              className={
                theme === "light"
                  ? "card2 card border-0 px-4 py-5"
                  : "card2 card border-0 px-4 py-5 bg-dark"
              }
              onSubmit={(e) => {
                e.preventDefault();
                singupSubmitHandler(user);
              }}
            >
              <div className="flex-col px-3">
                <label htmlFor="firstname" className="mb-1 input-required">
                  <p className="mb-1 text-sm d-inline">First Name</p>
                </label>
                <input
                  id="firstname"
                  className="mb-4 input-field p-1"
                  type="text"
                  name="firstname"
                  placeholder="Enter your first name"
                  required
                  value={user.firstName}
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                />
              </div>
              <div className="flex-col px-3">
                <label htmlFor="lastname" className="mb-1 input-required">
                  <p className="mb-1 text-sm d-inline">Last Name</p>
                </label>
                <input
                  id="lastname"
                  className="mb-4 input-field p-1"
                  type="text"
                  name="lastname"
                  placeholder="Enter your last name"
                  required
                  value={user.lastName}
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                />
              </div>
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
                  className="mb-4 input-field p-1"
                  name="password"
                  id="password"
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
              <div className="flex-col px-3 position-relative hide-pswrd">
                <label
                  htmlFor="confirm-password"
                  className="mb-1 input-required"
                >
                  <p className="mb-1 text-sm d-inline">Confirm Password</p>
                </label>
                <input
                  className="input-field p-1"
                  id="confirm-password"
                  name="confirm-password"
                  type={`${confirmPassVisible ? "text" : "password"}`}
                  placeholder="Re-enter password"
                  required
                  maxLength="20"
                  minLength="6"
                  value={user.confirmPassword}
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
                  }
                />
                <button
                  className="hide-pass-btn btn-no-decor"
                  onClick={(e) => {
                    e.preventDefault();
                    setConfirmPassVisible(!confirmPassVisible);
                  }}
                >
                  {confirmPassVisible ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </button>
              </div>
              <div className="flex-row-spacebtw px-3 mt-4">
                <div>
                  <input
                    id="accept-conditions"
                    type="checkbox"
                    name="chk"
                    required
                  />
                  <label htmlFor="accept-conditions" className="text-sm mx-2">
                    I accept the terms and conditions.
                  </label>
                </div>
              </div>
              {signupError !== "" && (
                <p className="flex-col px-3 text-danger">{signupError}</p>
              )}
              {user.password !== user.confirmPassword && (
                <p className="flex-col px-3 text-danger">
                  Passwords don't match
                </p>
              )}
              <div className="flex-col my-3 px-3">
                <button
                  type="submit"
                  className="btn btn-info text-center"
                  disabled={user.password !== user.confirmPassword}
                >
                  Sign Up
                </button>
              </div>
              <div className="flex-col mb-4 px-3">
                <small className="font-weight-bold">
                  Already have an account?{" "}
                  <Link to="/login" className="text-secondary">
                    Login here
                  </Link>
                </small>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="card1">
              <div className="row px-3 mt-4 mb-5">
                <img
                  src={signupImg}
                  className="login-image"
                  alt="picture of mug with adventure begins"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
