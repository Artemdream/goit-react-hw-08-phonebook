import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const PublicRoute = ({
  component,
  redirectTo = '/',
  restricted = false,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const shouldRedirect = restricted && isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
