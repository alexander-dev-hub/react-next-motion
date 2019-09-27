import React, { Suspense, Fragment } from 'react';

import { useMemoryStatus } from '../../utils/hooks';

import SimplePostList from '../../components/SimplePostList';
import AnimationPostList from '../../components/AnimationPostList';

import posts from '../../data/posts';

const Loading = () => <Fragment>Loading...</Fragment>;

const AdaptivePost = ({ manualAnimation, animation }) => {

  const memoryStatus = useMemoryStatus();
  if (!memoryStatus) return <Loading />;

  const { overLoaded } = memoryStatus;
  let isAnimationPost = true;

  if (manualAnimation) {
    isAnimationPost = animation;
  } else {
    isAnimationPost = !overLoaded;
  }

  const adaptivePost = isAnimationPost ? (
    <AnimationPostList posts={posts} />
  ) : (
    <SimplePostList posts={posts} />
  );

  return (
    <Suspense fallback={<Loading />}>
      <div>{adaptivePost}</div>
    </Suspense>    
  );
};

export default AdaptivePost;