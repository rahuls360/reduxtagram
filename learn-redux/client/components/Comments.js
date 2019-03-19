import React from 'react';

class Comments extends React.Component{
    render(){
        const {text, user} = this.props.comment;
        return <div className="comments">
            <div className="comment">
                <p><strong>{user}</strong>
                    {text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
            <form ref="commentForm" className="comment-form">
                <input type="text" ref="author" placeholder="author"/>
                <input type="text" ref="comment" placeholder="comment"/>
                <input type="text" hidden/>
            </form>
        </div>
    }
}

export default Comments;