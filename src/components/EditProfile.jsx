import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "react-bootstrap";
import {
  getAuth,
  getProfileModal,
  HIDE_PROFILE_MODAL,
  updateUserProfile,
  editLoggedInUserProfile,
} from "redux-reducers";
import { useTheme } from "theme-context";
import { useToast } from "custom-hooks";
import { CancelIcon, AddPhotoAlternateIcon } from "assets";

const EditProfile = () => {
  const { theme } = useTheme();
  const { showToast } = useToast();
  const { showProfileModal } = useSelector(getProfileModal);
  const dispatch = useDispatch();

  const { isAuth, token, user } = useSelector(getAuth);

  const { firstName, lastName, userBio, portfolio, profileImg } = user;
  const [userProfileDetails, setUserProfileDetails] = useState({
    firstName: firstName,
    lastName: lastName,
    userBio: userBio,
    portfolio: portfolio,
    profileImg: profileImg,
  });

  const cancelProfileEditHandler = () => {
    dispatch(HIDE_PROFILE_MODAL());
  };

  const editProfileSubmitHandler = async (userProfileDetails) => {
    try {
      const response = await dispatch(
        updateUserProfile({ token, userData: userProfileDetails })
      );
      if (response.error) {
        throw new Error("Can't update user profile.");
      }
      dispatch(HIDE_PROFILE_MODAL());
      dispatch(editLoggedInUserProfile(response.payload));
      showToast("success", "Updated Profile successfully.");
    } catch (error) {
      showToast("error", "Can't update user profile. Try again later.");
    }
  };

  const fileToURL = () => {
    const reader = new FileReader();
    reader.onload = () => {
      let imgUrl = reader.result;
      setUserProfileDetails({
        ...userProfileDetails,
        profileImg: imgUrl,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return showProfileModal && isAuth ? (
    <div className="edit-post-modal-wrapper d-flex justify-content-center align-items-center">
      <div className="edit-post-container p-2 position-relative">
        <h4>Edit Profile</h4>
        <button
          className="btn-no-decor position-absolute"
          onClick={cancelProfileEditHandler}
        >
          <CancelIcon sx={{ fontSize: "40px" }} />
        </button>
        <div className="edit-profile-text-container d-flex justify-content-center align-items-center">
          <div className="flex-row-centre">
            <form
              className={
                theme === "light"
                  ? "card2 card edit-profile-form border-0 w-100"
                  : "card2 card edit-profile-form border-0 bg-dark w-100"
              }
              onSubmit={(e) => {
                e.preventDefault();
                editProfileSubmitHandler(userProfileDetails);
              }}
            >
              <div className="flex-col px-3">
                <div className="d-flex justify-content-start align-items-center">
                  <Image
                    src={userProfileDetails.profileImg}
                    roundedCircle
                    width={50}
                    height={50}
                    className="me-3 my-2 object-fit-cover"
                  />
                  <label
                    htmlFor="add-image"
                    className="my-2 btn btn-info d-flex"
                  >
                    Upload
                    <AddPhotoAlternateIcon />
                    <input
                      id="add-image"
                      type="file"
                      accept=".png, .jpeg, .jpg"
                      hidden
                      onChange={(e) => {
                        e.preventDefault;
                        fileToURL();
                      }}
                    />
                  </label>
                </div>
                <label htmlFor="firstname" className="mb-1 input-required">
                  <p className="my-1 text-sm d-inline">First Name</p>
                </label>
                <input
                  id="firstname"
                  className="mb-4 input-field p-1"
                  type="text"
                  name="firstname"
                  placeholder="Update first name"
                  required
                  value={userProfileDetails.firstName}
                  onChange={(e) =>
                    setUserProfileDetails({
                      ...userProfileDetails,
                      firstName: e.target.value,
                    })
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
                  placeholder="Update last name"
                  required
                  value={userProfileDetails.lastName}
                  onChange={(e) =>
                    setUserProfileDetails({
                      ...userProfileDetails,
                      lastName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex-col px-3">
                <label htmlFor="userbio" className="mb-1 input-required">
                  <p className="mb-1 text-sm d-inline">Bio</p>
                </label>
                <textarea
                  className="mb-4 input-field p-1"
                  type="text"
                  name="bio"
                  id="userbio"
                  placeholder="Update bio"
                  required
                  maxLength="150"
                  value={userProfileDetails.userBio}
                  onChange={(e) =>
                    setUserProfileDetails({
                      ...userProfileDetails,
                      userBio: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex-col px-3">
                <label htmlFor="portfolio" className="mb-1 input-required">
                  <p className="mb-1 text-sm d-inline">Portfolio Link</p>
                </label>
                <input
                  className="mb-4 input-field p-1"
                  type="text"
                  name="portfolio"
                  id="portfolio"
                  placeholder="Update portfolio link"
                  required
                  value={userProfileDetails.portfolio}
                  onChange={(e) =>
                    setUserProfileDetails({
                      ...userProfileDetails,
                      portfolio: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex-col my-3 px-3">
                <button type="submit" className="btn btn-info text-center">
                  Edit Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default EditProfile;
