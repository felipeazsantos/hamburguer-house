import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCEP] = useState("");

  function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className="flex h-screen items-center justify-center bg-[#161410]" onSubmit={onSubmit}>
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="Casa do Hambuguer - Logo" className="mb-4" />
        </Link>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
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
        <Input
          type="password"
          placeholder="Confirme sua Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input type="text" placeholder="CEP" value={cep} onChange={(e) => setCEP(e.target.value)} />
        <Link to="#" className="w-full">
          <Button title="Criar conta" />
        </Link>

        <Link to="/login" className="w-full">
           <Button title="Já tenho uma conta" variant="outline" />
        </Link>
       
      </div>
    </form>
  );
};

export default Register;
