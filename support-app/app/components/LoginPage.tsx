import { PrimaryButton, TextField } from '@fluentui/react';

import React from 'react';

const LoginPage: React.FC = () => {
  // Implement login logic here

  return (
    <div>
      <TextField label="Username" />
      <TextField label="Password" type="password" />
      <PrimaryButton>Login</PrimaryButton>
    </div>
  );
};

export default LoginPage;
