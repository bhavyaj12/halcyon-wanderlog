import { Image } from "react-bootstrap";
import { useTheme } from "theme-context";

const SuggestionList = () => {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme === "light"
          ? "suggestions-wrapper bg-light py-2"
          : "suggestions-wrapper bg-dark py-2"
      }
    >
      <h5 className="mt-4">Suggestions for you</h5>
      <div className="flex-row-centre mt-3">
        <Image
          src="https://www.shareicon.net/data/128x128/2016/07/05/791214_man_512x512.png"
          roundedCircle
          width={30}
          height={30}
          className="my-2 img-fluid"
        />
        <div className="flex-col">
          <span className="mx-3">Bhavya Joshi</span>
          <span className="mx-3 user-name">@bhavyajoshi</span>
        </div>
        <button type="button" className="btn btn-info btn-sm">
          + Follow
        </button>
      </div>
      <div className="flex-row-centre mt-3">
        <Image
          src="https://www.shareicon.net/data/128x128/2016/07/05/791214_man_512x512.png"
          roundedCircle
          width={30}
          height={30}
          className="my-2 img-fluid"
        />
        <div className="flex-col">
          <span className="mx-3">Bhavya Joshi</span>
          <span className="mx-3 user-name">@bhavyajoshi</span>
        </div>
        <button type="button" className="btn btn-info btn-sm">
          + Follow
        </button>
      </div>
      <div className="flex-row-centre mt-3">
        <Image
          src="https://www.shareicon.net/data/128x128/2016/07/05/791214_man_512x512.png"
          roundedCircle
          width={30}
          height={30}
          className="my-2 img-fluid"
        />
        <div className="flex-col">
          <span className="mx-3">Bhavya Joshi</span>
          <span className="mx-3 user-name">@bhavyajoshi</span>
        </div>
        <button type="button" className="btn btn-info btn-sm">
          + Follow
        </button>
      </div>
    </div>
  );
};

export default SuggestionList;
