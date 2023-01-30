import * as React from "react";

type props = {
  headerLogo: any;
  headerLinks: any;
};

// const links: Link[] = [
//   {
//     label: "Home",
//     url: "/",
//   },
//   {
//     label: "Menu",
//     url: "#",
//   },
//   {
//     label: "Delivery & Collection",
//     url: "#",
//   },
//   {
//     label: "A Celebration of Flavour",
//     url: "#",
//   },
//   {
//     label: "E-gifts",
//     url: "#",
//   },
//   {
//     label: "Christmas",
//     url: "#",
//   },
//   {
//     label: "Working with us",
//     url: "#",
//   }
// ];

const Header = (props: any) => {
  const { headerLogo, headerLinks } = props;

  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    document.getElementById("body").classList.toggle("menu-opened");
  };
  // const linkDoms = links.map((link) => (
  //     <a className="navbar-item" href={link.url} >
  //       <span>{link.label}</span>
  //     </a>
  // ));

  return (
    <>
      <header className="site-header">
        <div className="container-lg">
          <div className="navbar">
            <div className="mobile-menu-btn lg:hidden">
              <button type="button" onClick={toggle} name="toggle-button">
                <span></span>
                <span></span>
              </button>
            </div>
            <div className="logo">
              <a href="#" className="">
                <img
                  src={headerLogo?.url}
                  alt=" Logo"
                  title="Well"
                />
              </a>
            </div>
            <div className="mid-nav">
              {headerLinks?.map((e: any) => {
                return (
                  <>
                    <div className="menu-item">
                      <a href={e.link} className="">
                        {e.label}
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
            {/* <div className="header-right-link">
              <a href={findPharmacy?.link} className="">
                {svgIcons.searchicon}
                <span>{findPharmacy?.label}</span>
              </a>
            </div> */}
          </div>
        </div>
      </header>

      {/* <div id="header" className="header-nav">
        <div className="container header-content">
          <div className="header-content-left">
            <a className="button" href="#">
              <span className="is-hidden-touch">Find a restaurant</span></a>
            <a className="button" href="#" title="Book now">Book now</a>
          </div>
          <div className="header-content-middle">
            <a className="logo" href="/">
              <img className="" src={logo} alt="Prezzo"/>
            </a>
          </div>
          <div class="header-content-right lg:hidden">
            <span class="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
        <div className="container">
          <nav className="navbar">
            {linkDoms}
          </nav>
        </div>
      </div> */}
    </>
  );
};

export default Header;
