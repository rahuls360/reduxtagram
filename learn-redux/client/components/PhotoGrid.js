import React from "react";
import Photo from "./Photo";

class PhotoGrid extends React.Component {
  componentDidMount() {
    console.log(this.props.posts);
  }
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, index) => (
          <Photo {...this.props} key={index} index={index} post={post} />
        ))}
      </div>
    );
  }
}

export default PhotoGrid;
