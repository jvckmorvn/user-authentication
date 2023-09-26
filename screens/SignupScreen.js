import { useContext, useState } from 'react';

import { signup } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import errorAlert from '../util/error-alert';
import { AuthContext } from '../store/auth-context';
import AuthContent from '../components/Auth/AuthContent';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signUpHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await signup(email, password);
      authCtx.authenticate(token)
    } catch (error) {
      errorAlert();
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Creating user...'/>
  }

  return <AuthContent onAuthenticate={signUpHandler}/>;
}

export default SignupScreen;
