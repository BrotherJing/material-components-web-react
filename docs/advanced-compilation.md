## Convention guidelines

To modify the MDC React library to be used in our project, just follow the simple steps below. Some of these steps involve package management, others are about advanced compilation issues.

First, do the following so that we can include the library into our project correctly:

1. Modify `package.json`

Change the name from `@material/react-xx` to `closure-react-xx`(in the future we might use `@<company name>/react-xx` or something). Also the names of dependencies if they begin with `@material/react-`.

2. Modify `.npmignore`

For now, just remove the content in `.npmignore`, since we need to compile these files along with our own source code.

---

To convert a react component to be advanced compalation compatible, do the following:

1. Avoid importing re-exported modules

This syntax is heavily used in the original code. For example:
```javascript
// list/index.js
import {MDCListFoundation} from '@material/list/dist/mdc.list';
```
But closure compiler does not recognize it. We should directly import the module from where it's first exported:
```javascript
import MDCListFoundation from '@material/list/foundation';
```

2. defaultProps

We need to add `@nocollapse` annotation to defaultProps of each component. Ohterwise they will be flatten during advanced compilation, and then unused props will be removed. See [this issue](https://github.com/google/closure-compiler/issues/1155).
```javascript
// list/index.js
/**
 * @nocollapse
 */
List.defaultProps = {
  className: '',
  children: [],
  nonInteractive: false,
  dense: false,
  avatarList: false,
  twoLine: false,
  singleSelection: false,
  selectedIndex: -1,
  handleSelect: () => {},
  wrapFocus: true,
  'aria-orientation': VERTICAL,
};
```

3. externs for props

In some component, object rest syntax is used. For example in `ListItem.js`:
```javascript
const {
      /* eslint-disable */
      className,
      classNamesFromList,
      childrenTabIndex,
      shouldFocus,
      shouldFollowHref,
      shouldToggleCheckbox,
      /* eslint-enable */
      attributesFromList,
      children,
      ...otherProps
    } = this.props;
```
When babel transpile this, it will use string property, thus fail in advanced compilation. Currently we solve this by preventing these keys being renamed. To do so, create a file called `extern.js` under component's root dir, and add:
```javascript
/**
 * ListItem
 */
let defaultProps = { // eslint-disable-line no-unused-vars
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
};
```
The comment is used to bypass lint rules.

If the component doesn't use object rest syntax, you don't need to write extern.