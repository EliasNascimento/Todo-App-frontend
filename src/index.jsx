import React from "react";
import ReactDOM from "react-dom";
// import { createStore } from "redux";
// import { Provider } from "react-redux";

import App from "./main/app";
import reducers from "./main/reducers.js";

// const store = createStore(reducers);
ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <App />,
  document.getElementById("app")
);
