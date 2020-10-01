//! Higher Order Component (HOC) - A component that renders another component:

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const Test = (props) => (
  <div>
    <h1>Test</h1>
    <p>Testing a test: {props.test}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  // returns the HOC
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Test);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="These are the details" />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={true} test="Authentication" />,
  document.getElementById('app')
);
