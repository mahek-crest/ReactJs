const Form = ({
  onFormSubmit,
  username,
  handleEmail,
  email,
  handleUsername,
}) => {
  return (
    <>
      <div className="m-20 rounded bg-slate-400 ">
        <h2>Form handle</h2>
        <form onSubmit={onFormSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="bg-slate-500 rounded p-2 m-2"
            value={username}
            onChange={handleUsername}
          />

          <label htmlFor="email">Email </label>
          <input
            id="email"
            type="text"
            className="bg-slate-500 rounded p-2 m-2"
            value={email}
            onChange={handleEmail}
          />

          <button className="m-2 p-2 bg-red-500 rounded">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
