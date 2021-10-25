import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Main = styled.div`
  .main {
    width: 100%;
    height: 100vh;
    background-color: #fffdf1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .main-login {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .line-mid {
    border-right: 1px solid #e5e5e5;
    width: 8%;
    height: 460px;
  }
`;

function LoginRegis() {
  return (
    <Main>
      <div className="main">
        <div className="container">
          <div className="main-login">
            <LoginForm />
            <div className="line-mid"></div>
            <RegisterForm />
          </div>
        </div>
      </div>
    </Main>
  );
}

export default LoginRegis;
