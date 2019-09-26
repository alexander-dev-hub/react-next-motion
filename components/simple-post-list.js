import Link from 'next/link';

import PostInfo from './post-info';

const SimplePostList = ({ posts }) => (
  <div>
    <div className="posts">
      {posts.map(post => {
        return (
          <div key={post.id} className="post">
            <Link scroll={false} href="/simplepost/[simplepost]" as={`/simplepost/${post.id}`}>
              <a>
                <div>
                  <img src={`/static/images/${post.id}.jpg`} />
                </div>
                <div>{post.title}</div>
              </a>
            </Link>
            <PostInfo post={post} />
          </div>
        );
      })}

      <style jsx>{`
        .posts {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .post {
          width: 50%;
          min-width: 340px;
          padding: 20px;
        }
        @media (max-width: 700px) {
          .post {
            width: auto;
          }
        }
      `}</style>
    </div>
  </div>
);

export default SimplePostList;