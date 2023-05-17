import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { selectUserEmail } from 'redux/auth/selectors';
import { Container, Title, UserButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  return (
    <Container>
      <Title>Welcome, {userEmail}</Title>
      <UserButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserButton>
    </Container>
  );
};
