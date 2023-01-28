import * as React from "react";
import "..//../assets/css/footerCss.css";
const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-col">
                <h4>company</h4>
                <ul>
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <a href="#">our services</a>
                  </li>
                  <li>
                    <a href="#">privacy policy</a>
                  </li>
                  <li>
                    <a href="#">affiliate program</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>get help</h4>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">shipping</a>
                  </li>
                  <li>
                    <a href="#">returns</a>
                  </li>
                  <li>
                    <a href="#">order status</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>online shop</h4>
                <ul>
                  <li>
                    <a href="#">watch</a>
                  </li>
                  <li>
                    <a href="#">bag</a>
                  </li>
                  <li>
                    <a href="#">shoes</a>
                  </li>
                  <li>
                    <a href="#">dress</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>more stuff</h4>

                <ul>
                  <li>
                    <a href="#">blog</a>
                  </li>
                  <li>
                    <a href="#">term & condition</a>
                  </li>
                  <li>
                    <a href="#">more</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t justify-center">
              <div className="sm:w-full px-4 md:w-1/6">
                <strong className="hover:text-header-cta-bg-color">Deno</strong>
              </div>
              <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                <h6 className="font-bold mb-2 hover:text-header-cta-bg-color">
                  Address
                </h6>
                <address className="not-italic mb-4 text-sm hover:text-header-cta-bg-color">
                  6 KHA.
                  <br />
                  Raja park 302004
                </address>
              </div>
              <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                <h6 className="font-bold mb-2 hover:text-header-cta-bg-color">
                  WebDevelopment
                </h6>
                <p className="mb-4 text-sm hover:text-header-cta-bg-color">
                  our services all type{" "}
                  <strong className="hover:text-header-cta-bg-color">
                    FREE
                  </strong>
                  .<br />
                </p>
              </div>
              <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
                <button
                  style={{ backgroundColor: "#894578" }}
                  className="button before-icon ml-2"
                >
                  Get Details
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
