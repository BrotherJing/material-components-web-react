/**
 * List
 */
/* eslint-disable quote-props */
let defaultProps = { // eslint-disable-line no-unused-vars
  className: '',
  nonInteractive: false,
  dense: false,
  avatarList: false,
  twoLine: false,
  singleSelection: false,
  selectedIndex: -1,
  handleSelect: () => {},
  wrapFocus: true,
  'aria-orientation': VERTICAL,
  tag: 'ul',
};
/* eslint-enable quote-props */

/**
 * ListDivider
 */
defaultProps = {
  className: '',
  tag: 'li',
  role: 'separator',
};

/**
 * ListGroup
 */
defaultProps = {
  className: '',
  children: null,
  tag: 'div',
};

/**
 * ListGroupSubheader
 */
defaultProps = {
  className: '',
  children: '',
  tag: 'h3',
};

/**
 * ListItemGraphic
 */
defaultProps = {
  tabbableOnListItemFocus: false,
  className: '',
  tabIndex: -1,
  graphic: {},
};

/**
 * ListItemMeta
 */
defaultProps = {
  tabbableOnListItemFocus: false,
  className: '',
  tabIndex: -1,
  meta: null,
};

/**
 * ListItem
 */
defaultProps = {
  className: '',
  classNamesFromList: [],
  attributesFromList: {},
  childrenTabIndex: -1,
  tabIndex: -1,
  shouldFocus: false,
  shouldFollowHref: false,
  shouldToggleCheckbox: false,
  onKeyDown: () => {},
  onClick: () => {},
  onFocus: () => {},
  onBlur: () => {},
  tag: 'li',
};

/**
 * ListItemText
 */
defaultProps = {
  tabbableOnListItemFocus: false,
  tabIndex: -1,
  className: '',
  primaryText: '',
  secondaryText: '',
};
