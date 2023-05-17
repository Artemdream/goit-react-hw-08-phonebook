import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Contact = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const ContactBtn = styled.button`
  border-radius: 5px;
  padding: 3px 8px;
  background-color: rgb(236, 101, 23);
  transition-duration: 250ms;
  border: transparent;

  :hover {
    box-shadow: rgb(240, 119, 49) 0px 1px 25px 0px,
      rgba(240, 119, 49) 0px 0px 0px 1px;
  }
`;
