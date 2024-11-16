import { footer } from "./data";
import logoImage from "../assets/Innovate_Future_logo-white.png";

function antCloudFooter() {
  const children = footer.map((item, i) => (
    <div key={i}>
      <a href={item.src}>{item.text}</a>
    </div>
  ));
  return (
    <div>
      <div className="logo" key="logo">
        <img src={logoImage} width="400" height="auto" />
      </div>
      <div key="nav" className="home-footer-nav-wrapper">
        {children}
      </div>
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="home-layout-wrapper home-footer-wrapper">
      <div className="home-layout">
        {antCloudFooter()}
        <p key="cop" className="copy">
          Copyright ©{currentYear}
        </p>
      </div>
    </div>
  );
}

export default Footer;
