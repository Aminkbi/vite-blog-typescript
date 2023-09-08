import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../redux/Api/postsApiService';
import { Post } from '../../redux/postsReducer';

const PostPage = () => {
  const { id } = useParams();

  const paramId = id ? id : '0';
  const intId = parseInt(paramId);

  const { data, isLoading } = useGetPostByIdQuery(intId);

  if (isLoading)
    return <span className="loading loading-ball loading-lg"></span>;

  const post: Post = data?.blog as Post;

  const dateOfCreation = new Date(post.created_at).toDateString();
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
        <p className="mt-4 text-gray-600">{post.description}</p>

        <div className="mt-8 flex justify-center">
          <img
            className="h-48 w-full rounded object-cover"
            src={post.photo_url}
            alt={post.title}
          />
        </div>
      </div>

      <div className="prose max-w-none">
        <p>{post.content_text}</p>
      </div>

      <div className="mt-8 text-right text-sm text-gray-500">
        <p>
          Posted in {post.category} - {dateOfCreation}
        </p>
      </div>
    </div>
  );
};

export default PostPage;
