import React from 'react'
import Photo from './Photo'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class PhotoGrid extends React.Component {
  constructor(props){
    super(props)
    this.item = React.createRef()
  }
  handleSubmit(e) {
    e.preventDefault()
    // eslint-disable-next-line react/no-string-refs
    this.props.addItem(this.refs.item.value)
  }

  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post,i) => <Photo {...this.props} key={i} i={i} post={post} />)}
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

PhotoGrid.propTypes = {
  posts: PropTypes.array,
  addItem: PropTypes.func,
}

export default connect(mapStateToProps)(PhotoGrid)