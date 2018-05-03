// @flow
import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import JWT from 'jsonwebtoken';

// Type hinting for props. Sadly, what props goes here is unknown.
type Props = Object;

// Type hinting state. Alert and alertmeessage might be unnecessary?
type State = {
  key: any,
  formData: Object,
  alertMessage: Object,
  showAlertMessage: boolean,
  isSigningIn: boolean,
  redirect: string,
  locationState: any
};

export default class SignIn extends Component<Props,State> {
  constructor(props: Object) {
    super(props);
    // (this:any) is important for flowtype
    (this: any).onSubmit = this.onSubmit.bind(this); 
    this.state = {
      key: Date.now(),
      formData: initFormData,
      alertMessage: {},
      showAlertMessage: false,
      isSigningIn: false,
      redirect: '/',
      locationState: props.location.state,
    };
  }
  onSubmit( { formData }: Object) {
    this.setState({
      key: Date.now(),
      formData,
      alertMessage: {
        type: 'info',
        message: 'Signing in...',
      },
      isSigningIn: true,
      showAlertMessage: true,
    });

    // Creates JWT token
    const token = JWT.sign(formData, process.env.REACT_APP_API_JWT_SECRET);

    /*TODO*/
    // Send request with token
    // On succes set change state, store token
    // On error, scream
  }
  render(){

    return (
      // Creates a form from bloody json, stored in Schema and UiSchema
      <Form
      className="form"
      autocomplete="off"
      key={this.state.key}
      formData={this.state.formData}
      schema={Schema}
      uiSchema={UISchema}
      validate={validate}
      ErrorList={null}
      onSubmit={this.onSubmit}
     >
      <button
        type="submit"
        className=""
        disabled={this.state.isSigningIn}
      >
        Sign In
      </button>
    </Form>

    )
  }
}

//Initial data as the component is loading
const initFormData = {
  email: '',
  password: ''
}

const Schema = {
  'type': 'object',
  'properties': {
    'email': {
      'type': 'string',
      'title': 'Email'
    },
    'password': {
      'type': 'string',
      'title': 'Password'
    }
  }
}

const UISchema = {
  'ui:rootFieldId': 'log_in',
  'email': {
    'ui:widget': 'email',
    'ui:autofocus': true,
    'ui:placeholder': 'Enter your email'
  },
  'password': {
    'ui:widget': 'password',
    'ui:placeholder': 'Enter your password'
  }
}
//Function that does nothing to validate the input
function validate() {
  return null
}