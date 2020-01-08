/* eslint-disable no-undef */
import React from 'react'
import { bindActionCreators } from 'redux'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actionCreators from '../actions/actionCreators'

class Photo extends React.Component {
  render() {
    const { post, i, comments } = this.props
    return (
      <figure key={i} className="grid-figure">

        <div className='grid-photo-wrap'>
          <Link to={`/view/${post.code}`}>
            <img className='grid-photo' src={require(`../../public/images/${post.display_src}`).default} alt={post.caption} />
          </Link>

          <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={post.likes} className="likes-heart">{post.likes}</span>
          </CSSTransitionGroup>

        </div>

        <figcaption>
          <p>{post.caption}</p>

          <div className="control-buttons">
            <button onClick={this.props.increment.bind(null,i)} className="likes">&hearts; {post.likes}</button>

            <Link to={`/view/${post.code}`} className="button">
              <span className="comment-count">
                <span className="speech-bubble"></span> {(comments[post.code] ? comments[post.code].length : 0)}
              </span>
            </Link>
          </div>

        </figcaption>

      </figure>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

Photo.propTypes = {
  post: PropTypes.string,
  i: PropTypes.number,
  comments: PropTypes.string,
  increment: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo)