import { useEffect } from 'react';

import Layout from '../../components/layout';

import Link from 'next/link';
import posts from '../../data/posts';
import { motion } from 'framer-motion';
import PostInfo from '../../components/post-info';

const SimplePost = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
    <div className="container post">
      <div>
        <img src={`/static/images/${props.post.id}.jpg`} />

        <div>
          <PostInfo post={props.post} />
          <p>{props.post.text}</p>
        </div>
        
        <div>
          <Link href="/simple">
            <a>Back to list</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .post {
          margin: 20px;
        }
        .post p {
          margin: 40px 0;
        }
      `}</style>
    </div>
    </Layout>
  );
};

SimplePost.getInitialProps = ({ query }) => {
  let post = posts.find(post => post.id == query.simplepost);
  return {
    post
  };
};

export default SimplePost;