import fileService from "../appwrite/filesConfig";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 roundede-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={fileService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold ">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
