import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions';

class BlogShow extends Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params._id);
  }

  renderImage() {
    if(this.props.blog.imageUrl) {
      return <img style={{ width: '100%' }} alt='blogImg' src={this.props.blog.imageUrl} />
    }
  }

  render() {
    if (!this.props.blog) {
      return '';
    }

    const { title, content, description } = this.props.blog;

    return (
      <div className='m-2'>
        <h3>{title}</h3>
        <p>{content}</p>
        {this.renderImage()}
        <p>{description}</p>
      </div>
    );
  }
}

function mapStateToProps({ blogs }, ownProps) {
  return { blog: blogs[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { fetchBlog })(BlogShow);
