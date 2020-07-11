"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _noop = _interopRequireDefault(require("../../utils/noop"));

var Button = function Button(props) {
  var _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? _noop["default"] : _props$onClick,
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

var _default = Button;
exports["default"] = _default;