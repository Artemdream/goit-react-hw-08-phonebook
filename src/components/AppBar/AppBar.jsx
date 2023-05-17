import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
