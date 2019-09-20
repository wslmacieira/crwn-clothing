import React from 'react';

import './SignInAndSignUp.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignInAndSignUp = props => (
  <div className="signin-and-signup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
