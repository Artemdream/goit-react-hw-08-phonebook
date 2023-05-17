import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: 500;
  margin: 0px 5px;

  @media (max-width: 479px) {
    font-size: 12px;
  }
`;

export const UserButton = styled.button`
  font-weight: 700;
  padding: 0 10px;
  height: 33px;
  border-radius: 5px;
  border: none;
  color: rgb(255, 255, 255);
  text-decoration: none;
  background-color: transparent;
  transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    box-shadow: rgb(240, 119, 49) 0px 1px 25px 0px,
      rgba(240, 119, 49) 0px 0px 0px 1px;
  }

  :active {
    background-color: rgba(240, 119, 49, 0.8);
    color: #fff;
  }

  @media (max-width: 479px) {
    font-size: 12px;
    padding: 0 5px;
  }
`;
