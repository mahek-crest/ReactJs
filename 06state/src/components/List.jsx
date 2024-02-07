const List = (props) => {
  const data = props.blog;
  const head = props.head;
  return (
    <div className="list">
      <h2 className="text-2xl text-black p-3">{head}</h2>
      {data.map((item) => (
        <div className="bg-gray-200 m-3 p-3" key={item.id}>
          <h1 className="font-bold">{item.title}</h1>
          <p>{item.body}</p>
          <p className="flex justify-end">{item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
