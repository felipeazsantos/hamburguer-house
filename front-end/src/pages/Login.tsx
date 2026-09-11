import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <form className="flex h-screen items-center justify-center bg-[#161410]" onSubmit={onSubmit}>
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="Casa do Hambuguer - Logo" className="mb-4" />
        </Link>
        <Input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="#" className="w-full">
          <Button title="Login" />
        </Link>
        <Link to="/register" className="w-full">
          <Button title="Não tenho conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
