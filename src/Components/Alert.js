import React from 'react';

function Alert(props) {
  return (
    props.alert && (
      <div className={`alert alert-warning ${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type.toUpperCase()}!</strong> {props.alert.msg}
      </div>
    )
  );
}

export default Alert;