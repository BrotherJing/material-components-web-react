// The MIT License
//
// Copyright (c) 2018 Google, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default class ActionButtons extends React.Component {
  addButtonClassToChildren = () => {
    return React.Children.map(this.props.children, (item) => {
      const className = classnames(
        item.props.className, 'mdc-card__action', 'mdc-card__action--button');
      const props = Object.assign({}, item.props, {className});
      return React.cloneElement(item, props);
    });
  };

  render() {
    const {
      className,
      children, // eslint-disable-line no-unused-vars
      ...otherProps
    } = this.props;
    const classes = classnames('mdc-card__action-buttons', className);

    return (
      <div
        className={classes}
        {...otherProps}
      >
        {this.addButtonClassToChildren()}
      </div>
    );
  }
}

ActionButtons.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * @nocollapse
 */
ActionButtons.defaultProps = {
  className: '',
  children: null,
};
