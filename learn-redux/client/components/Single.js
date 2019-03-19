import React from "react";
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  render() {
    const index = this.props.posts.findIndex((post) => post.code === this.props.params.photoId);
    const post = this.props.posts[index];
    const comment = this.props.comments[this.props.params.photoId] || [];
    console.log(post, index);
    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props}></Photo>
        <Comments comment={comment} index={index}></Comments>
      </div>
    );
  }
}

export default Single;
