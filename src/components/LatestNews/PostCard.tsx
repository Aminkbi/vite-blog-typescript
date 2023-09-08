import { Post } from '../../redux/postsReducer';

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="card glass m-auto h-96 w-auto max-w-sm">
      <figure>
        <img src={post.photo_url} alt={post.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
