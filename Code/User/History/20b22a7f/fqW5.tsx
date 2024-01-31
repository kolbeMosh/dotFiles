import validate from 'validate.js';

export const isValidData = (
  stateVar,
  errSetter,
  errGetter,
  setter,
  constraints,
  options?
) => {
  if (!!options) {
    errSetter(validate.single(stateVar, constraints, options));
  } else {
    errSetter(validate.single(stateVar, constraints));
  }
};
