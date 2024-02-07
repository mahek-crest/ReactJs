import { useState } from "react";
import List from "./List";

const Home = () => {
  const data = [
    { title: "head1 ", body: "body of the content ", author: "Maria", id: 1 },
    { title: "head2 ", body: "body of the content ", author: "Mario", id: 2 },
    { title: "head3 ", body: "body of the content ", author: "Eliza", id: 2 },
    { title: "head4 ", body: "body of the content ", author: "Jonas", id: 3 },
    { title: "head5 ", body: "body of the content ", author: "Mario", id: 4 },
  ];

  const [blog, setBlog] = useState(data);

  return (
    <div className="home">
      <List blog={blog} head="All blogs" />
      <List blog={blog.filter((blog) => blog.id === 2)} head="Mario's blogs" />
    </div>
  );
};

export default Home;
