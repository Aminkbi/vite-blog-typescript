import PostCard from './PostCard';
import { useGetPostsQuery } from '../../redux/Api/postsApiService';
import { Post } from '../../redux/postsReducer';
import { useState } from 'react';
import Pagination from '../Pagination';
const LatestNews = () => {
  const { data, isLoading } = useGetPostsQuery();

  const posts: Post[] = data ? data.blogs : [];

  const [page, setPage] = useState(0);

  const postsPerPage = 15;

  let displayedPosts = posts;

  displayedPosts = posts?.slice(page * 15, postsPerPage * (page + 1));

  const pageCount = posts?.length ? Math.ceil(posts.length / postsPerPage) : 1;
  return (
    <div className="flex w-full max-w-7xl flex-col p-6">
      <div className="mb-10 flex w-full flex-col justify-between gap-3">
        <h1 className="text-7xl font-extralight text-gray-100">Latest News</h1>
        <h3 className="badge badge-info p-4 text-center text-xl">
          Page:{page}
        </h3>
      </div>

      <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {isLoading && <span className="loading loading-ball loading-lg"></span>}

        {posts &&
          displayedPosts?.map(post => <PostCard key={post.id} post={post} />)}
      </div>
      <div className="mt-9 flex w-full justify-center">
        <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
      </div>
    </div>
  );
};

export default LatestNews;
