import React, { Component } from "react";

import { connect } from "react-redux";
import map from "lodash/map";
import { Link } from "react-router-dom";
import { fetchPublicBlogs, likePublicBlog } from "../actions";
import { v4 } from "uuid";

class Landing extends Component {
  componentDidMount() {
    this.props.fetchPublicBlogs();
  }

  clickHandler(blogID) {
      this.props.likePublicBlog(blogID);
      window.location.reload();
}

  renderBlogs() {
    return map(this.props.blogs, (blog) => {
      return (
        <div
          key={v4()}
          className="post-item isotope-item clearfix post-45 post type-post status-publish format-standard has-post-thumbnail hentry category-adventures"
        >
          <div className="date_label">{blog.createdAt}</div>
          <div style={{ cursor: 'pointer' }} className="button-love">
            <span onClick={() => this.clickHandler(blog._id)} className="mfn-love " data-id={45}>
              <span className="icons-wrapper">
                <i className="icon-heart-empty-fa" />
                <i className="icon-heart-fa" />
              </span>
              <span className="label">{blog.likesCount}</span>
            </span>
          </div>
          <Link to={`/blogs/${blog._id}`}>
            <div className="image_frame post-photo-wrapper scale-with-grid images_only">
              <div className="image_wrapper">
                  <div className="mask" />
                  <img
                    src="images/blogger-blog-adventure2.jpg"
                    className="scale-with-grid wp-post-image"
                    alt=""
                  />
              </div>
            </div>
          </Link>

          <Link to={`/blogs/${blog._id}`}>

          <div
            className="post-desc-wrapper bg-dark"
            style={{ backgroundColor: "#505b4e" }}
          >
            <div className="post-desc">
              <div className="post-head">
                <div className="post-meta clearfix">
                  <div className="category">
                    <span className="cat-btn">
                      Categories <i className="icon-down-dir" />
                    </span>
                    <div className="cat-wrapper">
                      <ul className="post-categories">
                        <li>
                          <span>
                            Adventures
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-title">
                <h2 className="entry-title">
                  {blog.title}
                </h2>
              </div>
              <div className="post-excerpt">{blog.content}</div>
              <div className="post-footer">
                <span className="vcard author post-author">
                  <img
                    alt={blog._user.displayName}
                    src={`${blog._user.photoUrl}`}
                    className="post-date updated" referrerPolicy="no-referrer" width={'40px'}
                  /> By {blog._user.displayName},
                
                  On &nbsp;
                  {new Date(blog.createdAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}
                </span>
              </div>
            </div>
          </div>
          </Link>

        </div>
      );
    });
  }

  render() {
    return (
      <div className="blog color-custom style-simple button-flat layout-full-width if-zoom if-border-hide no-shadows header-plain header-fw minimalist-header-no sticky-header sticky-tb-color ab-hide subheader-both-center menu-link-color menuo-right menuo-no-borders mobile-tb-center mobile-side-slide mobile-mini-mr-ll tablet-sticky mobile-header-mini mobile-sticky ">
        <div id="Wrapper">
          <div id="Header_wrapper">
            <div id="Subheader">
              <div className="container">
                <div className="column one">
                  <h1 className="title">BlogFeed</h1>
                </div>
              </div>
            </div>
          </div>
          <div id="Content">
            <div className="content_wrapper clearfix">
              <div className="sections_group">
                <div className="section ">
                  <div className="section_wrapper clearfix">
                    <div className="column one column_blog">
                      <div className="blog_wrapper isotope_wrapper">
                        <div className="posts_group lm_wrapper photo2 col-1">
                          {this.renderBlogs()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer id="Footer" className="clearfix">
            <div className="widgets_wrapper">
              <div className="container">
                <div className="column one">
                  <aside className="widget_text widget widget_custom_html">
                    <div className="textwidget custom-html-widget">
                      <div style={{ textAlign: "center" }}>
                        <img
                          className="foot-logo"
                          alt="blogfeed-logo"
                          src="./logo.png"
                        />
                        <hr
                          className="no_line"
                          style={{ margin: "0 auto 20px" }}
                        />
                        <p>
                          &copy; 2023 &nbsp;{" "}
                          <a href="https://www.github.com/webdevtut">WebDev™</a>
                        </p>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ blogs }) {
  return { blogs };
}

// export default Landing;
export default connect(mapStateToProps, { fetchPublicBlogs, likePublicBlog })(Landing);
