const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <div className="welcome-message ">
      <h1 className="text-center ">There are no posts</h1>
      <center>
        <button className="btn btn-primary   " onClick={onGetPostClick}>
          Show Post
        </button>
      </center>
    </div>
  );
};

export default WelcomeMessage;
