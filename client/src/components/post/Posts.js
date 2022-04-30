import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getPosts } from '../../actions/post';
import PostItem from './PostItem';
import PropTypes from 'prop-types';
import containerWrapper from '../layouts/containerWrapper';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Posts</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome to the
        community
      </p>
      {/* Post Form */}
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default containerWrapper(
  connect(mapStateToProps, { getPosts })(Posts)
);
