import navBarLogo from "../../assets/navBar/Architect.svg";
export const NavBar = () => {
  return (
    <div className="navBar_wrap">
      <img className="navBar_logo" src={navBarLogo}></img>
      <div className="navBar_links">
        <div>Головна</div>
        <div>Галерея</div>
        <div>Курси</div>
        <div>Про нас</div>
        <div>Долучитись</div>
      </div>
    </div>
  );
};
