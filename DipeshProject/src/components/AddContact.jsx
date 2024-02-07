const AddContact = ({ onNameChange, name }) => {
  return (
    <div>
      <form
        action=""
        className="bg-slate-400 w-[30rem] p-4 rounded-md mx-auto my-20"
      >
        <div className="text-center font-bold">
          <h2>Add Contact</h2>
        </div>
        <div className="m-3 flex flex-col ">
          <label htmlFor="name">Name</label>
          <input
            className="my-1 bg-slate-300 rounded-md p-1"
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={() => {
              onNameChange;
            }}
          />
        </div>

        <div className="m-3 flex flex-col ">
          <label htmlFor="email">Email</label>
          <input
            className="my-1 bg-slate-300 rounded-md p-1"
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex justify-center">
          <button
            onSubmit={handleSubmit}
            className="p-2 rounded-md bg-slate-500 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
