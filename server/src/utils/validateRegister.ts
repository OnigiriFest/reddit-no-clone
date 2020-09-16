import { UserPasswordInput } from 'src/resolvers/UserPasswordInput';

export const validateRegister = (options: UserPasswordInput) => {
  if (options.username.length <= 2) {
    return [
      {
        field: 'username',
        message: 'The length must be greater than 2',
      },
    ];
  }

  if (options.username.includes('@')) {
    return [
      {
        field: 'username',
        message: 'cannot include an "@"',
      },
    ];
  }

  if (options.password.length <= 2) {
    return [
      {
        field: 'password',
        message: 'The length must be greater than 2',
      },
    ];
  }

  if (!options.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'invalid email',
      },
    ];
  }

  return null;
};
