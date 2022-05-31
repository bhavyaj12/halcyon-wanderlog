import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "redux-reducers";
import { heroImg } from "assets";

const HomePage = () => {
  const { isAuth } = useSelector(getAuth);
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={heroImg}
            className="d-block mx-lg-auto img-fluid"
            alt="Travel hero image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Travel solo and share your journey
          </h1>
          <p className="lead">
            Wanderlog is a social media site created for and of passionate
            travellers who are looking to share their travel journey with
            people, inspiring others to let go of their inhibition and start
            with their own solo travel wanderings.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            {isAuth ? (
              <Link to="/feed">
                <button
                  type="button"
                  className="btn btn-info btn-lg px-4 me-md-2"
                >
                  Start Now
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button
                  type="button"
                  className="btn btn-info btn-lg px-4 me-md-2"
                >
                  Start Now
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
