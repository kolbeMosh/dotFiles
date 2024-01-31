import validate from 'validate.js';

export const isValidData = (stateVar, errSetter, constraints, options?) => {
  var passContraints = {}
  if (!!options) {
    errSetter(validate.single(stateVar, constraints, options));
  } else {
    errSetter(validate.single(stateVar, constraints));
  }
};
