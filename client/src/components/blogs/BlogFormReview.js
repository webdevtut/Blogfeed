// BlogFormReview shows users their form inputs for review
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

class BlogFormReview extends Component {
  state = { file: null, ispublic : 'private' };

  
  convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  

  renderFields() {
    const { formValues } = this.props;

    return _.map(formFields, ({ name, label }) => {
      return (
        <div className="mb-1" key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      );
    });
  }

  renderButtons() {
    const { onCancel } = this.props;

    return (
      <div>
        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={onCancel}
        >
          Back
        </button>
        <button className="green btn-flat right white-text">
          Save Blog
          <i className="material-icons right">email</i>
        </button>
      </div>
    );
  }

  onSubmit(event) {
    event.preventDefault();

    const { submitBlog, history, formValues } = this.props;

    submitBlog(formValues, this.state, history);
  }

  onFileChange = async (event) =>  {
    const base64 = await this.convertBase64(event.target.files[0]);
    this.setState({ file: base64 });
  }

  onSelection(event) {
    if(event.target.checked){
      this.setState({ ispublic: event.target.value });
    }
    else{
      this.setState({ ispublic: 'private' });
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h5>Please confirm your entries</h5>
        {this.renderFields()}
      <h5>Add an Image</h5>
      <p>Resolution greater than or equal to 1000*600</p>
      <input onChange={this.onFileChange.bind(this)} className='input-field' type="file" accept="image/*" />
      <label>Check this to show on home page</label>
      <input  onChange={this.onSelection.bind(this)} className='input-field' type="checkbox" id="isPublic" name="isPublic" value="public"></input>
        {this.renderButtons()}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { formValues: state.form.blogForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(BlogFormReview));
