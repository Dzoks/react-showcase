import React from 'react';
import PrivateRoute from "./PrivateRoute";

export default  ({ id,store,...rest }) => (
    <PrivateRoute  {...rest} allowed={store[id]} />
)