import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import Photo from './Photo'
import Comments from './Comments'
import * as actionCreators from '../actions/actionCreators'

class Single extends React.Component {
  render() {
    const i = this.props.posts.findIndex((post)=> 
      post.code === this.props.match.params.postId)

    return (
      <div className="single-photo">
        <Photo key={i} i={i} post={this.props.posts[i]} {...this.props} />
        <Comments {...this.props} postId={i} />
      </div>
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

Single.propTypes = {
  posts: PropTypes.array,
  match: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Single)
