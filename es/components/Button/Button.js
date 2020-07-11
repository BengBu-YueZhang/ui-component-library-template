import * as React from 'react';
import noop from '../../utils/noop';

var Button = function Button(props) {
  var _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? noop : _props$onClick,
      children = props.children;

  var handleClick = function handleClick(event) {
    onClick(event);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "button",
    role: "button",
    onClick: handleClick
  }, children);
};

export default Button;