import React from 'react'
import PropTypes from 'prop-types'

export default class Comments extends React.Component{
  constructor(props){
    super(props)
    this.author = React.createRef()
    this.commentForm = React.createRef()
    this.comment = React.createRef()
  }
    
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment" 
            onClick={() => this.props.removeComment.bind(null,this.props.match.params.postId, i)}
          >
            &times;
          </button>
        </p>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addComment(this.props.match.params.postId, this.author.value, this.comment.value)
    this.commentForm.reset()
  }

  render() {
    const comments = this.props.comments[this.props.match.params.postId] || []
    return (
      <div className="comments">
        {comments.map(this.renderComment)}
        <form onSubmit={this.handleSubmit} ref={this.commentForm} className="comment-form">
          <input type="text" ref={this.author} placeholder="author"/>
          <input type="text" ref={this.comment} placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

Comments.propTypes = {
  comments: PropTypes.array,
  match: PropTypes.array,
  addComment: PropTypes.func,
  removeComment: PropTypes.func,
}