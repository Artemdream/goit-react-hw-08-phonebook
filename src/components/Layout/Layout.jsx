import { AppBar } from 'components/AppBar/AppBar';
import { GlobalStyle } from 'components/GlobalStyle';
import { Body, Main } from 'components/Layout/Layout.styled';
import { PreLoader } from 'components/Loader/loader';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsRefreshing } from 'redux/auth/selectors';

export const Layout = () => {
  const isFetching = useSelector(selectIsRefreshing);
  return (
    <Body>
      {isFetching ? (
        <PreLoader />
      ) : (
        <>
          <AppBar />
          <Main>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Main>
        </>
      )}
      <Toaster />
      <GlobalStyle />
    </Body>
  );
};
