import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, user, ...restProps }) => {
  return (
    <Route {...restProps}>
      {user ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};
