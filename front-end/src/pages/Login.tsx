import { useState } from "react";
import Input from "../components/Input";

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
        <img src="./logo.png" alt="Casa do Hambuguer - Logo" className="mb-4" />
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
        <button className="mt-2 w-full cursor-pointer rounded-sm bg-[#C92A0E] py-1 text-sm font-bold text-white">
          Entrar
        </button>
        <button className="w-full cursor-pointer rounded-sm bg-white py-1 text-sm font-bold text-[#C92A0E]">
          Não tenho conta
        </button>
      </div>
    </form>
  );
};

export default Login;
