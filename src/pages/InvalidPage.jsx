import { image404 } from "assets";

const InvalidPage = () => {
  return (
    <div className="image-404-container my-6 p-4 d-flex flex-column justify-content-center align-items-center">
      <div className="alert alert-danger">Page Not Found</div>
      <img alt="404 image" src={image404} className="error-404-img" />
    </div>
  );
};

export default InvalidPage;
