import validate from 'validate.js';

export const isValidData = (stateVar, errSetter, constraint, options?) => {
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
    email: {
      presence: true,
      email: true
    },
    phoneNumber: {
      format: {
        pattern: '^(([0-9]{3}) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$',
        message: 'Must match format (123) 456-7890 or 123-456-7890'
      }
    }
  };

  if (!!options) {
    errSetter(validate.single(stateVar, validationConstraints, options));
  } else {
    errSetter(validate.single(stateVar, constraint));
  }
};
