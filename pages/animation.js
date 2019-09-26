import Layout from '../components/layout';

import posts from '../data/posts';
import AnimationPostList from '../components/animation-post-list';

const Animation = () => {
  return (
    <Layout>
      <div className='container'>
        <h1 className='title'>Next.js &amp; Framer Motion</h1>
        <AnimationPostList posts={posts} />
      </div>
    </Layout>
  );
}

export default Animation