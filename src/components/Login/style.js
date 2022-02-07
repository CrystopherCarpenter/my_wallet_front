import styled from "styled-components";

const Logo = styled.h1`
  display: flex;
  justify-self: center;
  align-items: center;
  width: 147px;
  height: 50px;
  margin: calc((100vh - ${(props) => (props.login ? "400px" : "600px")}) / 2)
    auto 24px auto;
  margin-bottom: 24px;
  font-family: Saira Stencil One;
  font-size: 32px;
  color: #ffffff;
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
  background: ${(props) => (props.disabled ? `#F2F2F2` : ((!props.validation) ? `#FFFFFF` : '#FFD3D3'))};
  ${(props) => (props.validation && 'border: 1px solid red;')};
  border-radius: 5px;
  padding: 0 11px;
  font-size: 20px;
  color: ${(props) => (props.disabled ? `#AFAFAF` : '#000000')};
  ::placeholder {
    color: ${(props) => (props.disabled ? `#AFAFAF` : `#000000`)};
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

const PageLink = styled.p`
  font-size: 15px;
  text-align: center;
  text-decoration-line: underline;
  font-weight: bold;
  color: #fff;
  :hover {
    cursor: pointer;
  }
`;

export { Logo, Container, Input, Button, PageLink };
