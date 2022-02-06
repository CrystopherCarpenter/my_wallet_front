import styled from "styled-components";

const Name = styled.h1`
  width: 326px;
  height: 31px;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  margin: 25px 0;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  color: #FFFFFF;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 13px;
  margin-bottom: 36px;
`;

const Input = styled.input`
  width: 326px;
  height: 58px;
  box-sizing: border-box;
  background: ${(props) => (props.disabled ? `#F2F2F2` : `#FFFFFF`)};
  border-radius: 5px;
  padding: 0 11px;
  font-size: 20px;
  color: ${(props) => (props.disabled ? `#AFAFAF` : `#000`)};
  ::placeholder {
    color: ${(props) => (props.disabled ? `#AFAFAF` : `#000`)};
  }
`;

const Button = styled.button`
  width: 326px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a328d6;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  ${(props) => props.disabled && `opacity: 0.7;`}
  :hover {
    cursor: pointer;
  }
`;

export { Name, Container, Input, Button } 