// @flow
import {Component} from 'React';
import JWT from 'jsonwebtoken';

type Props = Object;

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

    const token = JWT.sign(formData, process.env.REACT_APP_API_JWT_SECRET);

    /*TODO*/
    // Send request with token
    // On succes set change state, store token
    // On error, scream
  }
  render(){
    (
      <input type="text">
    )
  }
}
const initFormData = {'hej': 'hej'};