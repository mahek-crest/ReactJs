const List = ({ users }) => {
  return (
    <>
      <ul>
        {users.map((item, id) => (
          <li key={item.id}>{item.firstName}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
