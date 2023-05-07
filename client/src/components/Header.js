import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href={'/auth/google'}>Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="3">
            <Link to="/blogs">My Blogs</Link>
          </li>,
          <li key="2">
            <a href={'/auth/logout'}>Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="dune">
        <div className="nav-wrapper">
          <Link
            to={'/'}
            className="left brand-logo"
            style={{ marginLeft: '10px' }}
          >
          <img src="./logo.png" alt="logo" className='blogFeed' style={{ height: '4rem', padding: '0.5rem' }}></img>
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
