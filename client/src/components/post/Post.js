import React, { Fragment, useEffect } from 'react';
import containerWrapper from '../layouts/containerWrapper';
import PostItem from '../posts/PostItem';
import Spinner from '../layouts/Spinner';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';
import { getPost } from '../../actions/post';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Post = ({
  getPost,
  post: { post, loading },
  match,
}) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link className='btn' to='/posts'>
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._Id} />
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default containerWrapper(
  connect(mapStateToProps, { getPost })(Post)
);
