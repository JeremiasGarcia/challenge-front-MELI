import { useNavigate } from "react-router-dom";
import imgLogo from '../assets/Logo_ML.png';
import imgSearch from '../assets/ic_Search.png';

export const NavBar = () => {
  const navigateTo = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = new window.FormData(event.target);
    const search = fields.get("query");

    navigateTo(`/items?search=${search}`);
  };

  const handleGoToHome = () => {
    navigateTo("/");
  };

  return (
    <header className="header-nav">
      <button className="btnIni-nav" onClick={handleGoToHome}><img src={imgLogo} alt="Inicio" /></button>
      <form className="form-nav" onSubmit={handleSubmit}>
        <input
          className="input-nav"
          name="query"
          placeholder="Buscar productos, marcas y más…"
          type="text"
        />
        <button className="btnSerach-nav" type="submit"><img src={imgSearch} alt="Buscar" /></button>
      </form>
    </header>
  );
};
