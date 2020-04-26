"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var Alert = function Alert(props) {
  var children = props.children;
  return React.createElement("div", null, children);
};

var _default = Alert;
exports["default"] = _default;