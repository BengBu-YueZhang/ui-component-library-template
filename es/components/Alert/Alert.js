import * as React from 'react';

var Alert = function Alert(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "alert"
  }, children);
};

export default Alert;