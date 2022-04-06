import styled from "@emotion/styled";

// export const Input = styled.input`
//   width: 400px;
//   height: 40px;
//   padding: 10px;
//   font-size: 16px;
// `;

// export const Button = styled.button`
//   width: 100px;
//   height: 40px;
//   margin-left: 10px;
//   font-size: 18px;
//   font-weight: 500;
// `;

// export const Div = styled.div`
//   margin: 30px 27px;
//   display: flex;
// `;
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
