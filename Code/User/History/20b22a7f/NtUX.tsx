import validate from 'validate.js';

export const isValidData = (stateVar, errSetter, constraints, options?) => {
  // const passwordFormat = '^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$';

  if (!!options) {
    errSetter(validate.single(stateVar, constraints, options));
  } else {
    errSetter(validate.single(stateVar, constraints));
  }
};
