/**
 * TextField
 */
let defaultProps = { // eslint-disable-line no-unused-vars
  className: '',
  dense: false,
  floatingLabelClassName: '',
  fullWidth: false,
  helperText: null,
  isRtl: false,
  leadingIcon: null,
  lineRippleClassName: '',
  notchedOutlineClassName: '',
  outlined: false,
  textarea: false,
  trailingIcon: null,
};

/**
 * Input
 */
defaultProps = {
  className: '',
  inputType: 'input',
  disabled: false,
  isValid: undefined,
  foundation: {
    activateFocus: () => {},
    deactivateFocus: () => {},
    autoCompleteFocus: () => {},
    setDisabled: () => {},
    setTransformOrigin: () => {},
    setValue: () => {},
    handleValidationAttributeMutation_: () => {},
  },
  handleValueChange: () => {},
  id: null,
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onMouseDown: () => {},
  onTouchStart: () => {},
  setDisabled: () => {},
  setInputId: () => {},
  handleFocusChange: () => {},
  value: '',
};
