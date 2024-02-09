const Display = ({ username, email }) => {
  return (
    <div className="bg-slate-400 rounded-sm">
      <p className="text-lg m-2">Name : {username}</p>
      <p className="text-lg m-2">Email : {email} </p>
    </div>
  );
};

export default Display;
