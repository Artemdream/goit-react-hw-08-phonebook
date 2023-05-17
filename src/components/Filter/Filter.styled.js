import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const Title = styled.p`
  margin-bottom: 10px;
`;
export const FilterInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 4px;
  color: rgb(74, 85, 104);
  outline: none;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.2s ease-in-out 0s;

  :focus {
    background-color: #fff;
    box-shadow: 0 0 0 2px rgb(238, 182, 40);
  }
`;
