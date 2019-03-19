import React from 'react';

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const photoId = this.props.params.photoId;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        console.log(author, comment);
        this.props.addComment(photoId, author, comment);
    };
    render(){
        const {text, user} = this.props.comment;
        return <div className="comments">
            <div className="comment">
                <p><strong>{user}</strong>
                    {text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
            <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="author" placeholder="author"/>
                <input type="text" ref="comment" placeholder="comment"/>
                <input type="submit" hidden/>
            </form>
        </div>
    }
}

export default Comments;