"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tasksCollection = exports.profileCollection = exports.auth = exports.db = void 0;

var _app = _interopRequireDefault(require("firebase/compat/app"));

require("firebase/compat/auth");

require("firebase/compat/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyCNZxj_XGjHXXuQT5-rE6PGDe3PTmuUSJQ",
  authDomain: "todo-list-vue-amanda.firebaseapp.com",
  projectId: "todo-list-vue-amanda",
  storageBucket: "todo-list-vue-amanda.appspot.com",
  messagingSenderId: "801812902151",
  appId: "1:801812902151:web:152564a525f1e2bbc355a2"
};

_app["default"].initializeApp(firebaseConfig);

var db = _app["default"].firestore();

exports.db = db;

var auth = _app["default"].auth();

exports.auth = auth;
var profileCollection = db.collection('profile');
exports.profileCollection = profileCollection;
var tasksCollection = db.collection('tasks');
exports.tasksCollection = tasksCollection;