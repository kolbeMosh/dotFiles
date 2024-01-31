import validate from 'validate.js';

export const isValidData = (stateVar, errSetter, constraints, options?) => {
  const validationConstraints = {
    password: {
      presence: true,
      format: {
        pattern: '^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$',
        message:
          'Must be alphanumeric (a-z & 0-9) and Contain at least 1 number and 1 letter'
      },
      length: {
        minimum: 7,
        tooShort: 'Password Must be at least %{count} characters long'
      }
    },
    email: {}
  };

  if (!!options) {
    errSetter(validate.single(stateVar, constraints, options));
  } else {
    errSetter(validate.single(stateVar, constraints));
  }
};
