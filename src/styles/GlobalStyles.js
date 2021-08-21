import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --lightblue: #7D00FF;
  --lightblue2: rgba(125, 0, 255, 0.1);
  --black:rgba(0, 0, 0);
  --red: rgb(240, 66, 66);
  --bg: #f7f9fa;
  --white:#ffffff;
  --gray: rgba(233,233,233);
  --gray2: #f2f0f5;
  --secondary: #5b7083;
}

html {
  box-sizing: border-box;
  font-size: 1rem;
  overflow-y: auto;
  overflow-x: none;
  &::-webkit-scrollbar {
    background-color: rgba(0, 0, 0, 0.2);
    width: 6px;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50px;
  }
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

* {
  margin: 0;
  padding: 0;
  
}
body {
  font-family: 'Poppins', sans-serif;
  /* background-color:var(--bg); */
  overflow:none;
  height:100vh;
  /* width:100vw; */
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
a{
  text-decoration: none;
}

button{
  background-color: var(--lightblue);
  margin: 7px 0;
  border: none;
  padding: 12px 0;
  border-radius: 20px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  width:100%;
  :disabled {
    opacity: 0.5;
    cursor: default;
  }
  @media (min-width: 768px) {
    width: 50%;
    padding: 16px 0;
    border-radius: 25px;
    font-size: 16px;
  }
}


h1{
  font-size: 45px;
  font-weight: 700;
  margin-top: 20px;
}

h3{
  margin-left:10px;
  margin-bottom:10px;
}

`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--lightblue);
  padding: 6px 15px;
  margin: 15px 0 5px 0;
  border-radius: 5px;
  position: relative;
  transition: 450ms all;
  border-color: ${(props) =>
    props.validate ? "var(--lightblue)" : "var(--red)"};
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 18px;
  &::placeholder {
    color: rgba(200, 200, 200);
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: var(--red);
  padding-left: 10px;
`;
