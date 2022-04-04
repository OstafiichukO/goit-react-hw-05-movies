import styled from "@emotion/styled";

export const Button = styled.button`
  width: 200px;
  height: 60px;
  font-size: 24px;
  font-weight: 500;
  border-radius: 8px;
  color: #af5665;
  background-color: #fff;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    color: red;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 0 50px 0;
`;
