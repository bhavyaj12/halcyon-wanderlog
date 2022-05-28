import { NavSide, AddPost, PostCard, SuggestionList } from "components";


const UserHome = () => {
  return (
    <section className="social-main-content">
      <NavSide />
      <div className="posts-wrapper">
        <AddPost />
        <PostCard />
        <PostCard />
      </div>
      <SuggestionList />
    </section>
  );
};

export default UserHome;
