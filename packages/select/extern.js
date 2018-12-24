/**
 * Select
 */
defaultProps = {
  box: false,
  className: '',
  disabled: false,
  floatingLabelClassName: '',
  id: null,
  isRtl: false,
  lineRippleClassName: '',
  nativeControlClassName: '',
  notchedOutlineClassName: '',
  onChange: () => {},
  outlined: false,
  options: [],
  value: '',
};

/**
 * NativeControl
 */
defaultProps = {
  className: '',
  children: null,
  disabled: false,
  foundation: {
    handleFocus: () => {},
    handleBlur: () => {},
  },
  id: null,
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onTouchStart: () => {},
  onMouseDown: () => {},
  setRippleCenter: () => {},
  handleDisabled: () => {},
  value: '',
};
