export const Header = () => {
  return (
    <div className="bg-[#161410]">
      <div className="w-full md:w-[737px] p-3 md:p-0 mx-auto flex justify-between items-center">
        <img src="logo.png" alt="Casa da Hamburgueria - logo" />
        <button className="bg-[#F2DAAC] w-[130px] h-[35px] flex items-center justify-center rounded-sm cursor-pointer">
          Entrar
        </button>
      </div>
    </div>
  );
};
