import * as React from "react";

type props = {
  headerLogo: any;
  headerLinks: any;
};

const Header = (props: any) => {
  const { headerLogo, headerLinks } = props;

  return (
    <div className="" style={{ backgroundColor: "#101010" }}>
      <div className="centered-container">
        <nav className="py-6 flex items-center justify-between">
          <div className="flex gap-x-4 items-center">
            <img
              src={headerLogo?.url}
              style={{
                width: "100px",
                height: "80px",
                borderRadius: "10px",
                marginLeft: "10px",
              }}
            ></img>

            {headerLinks?.map((links: any) => {
              return (
                <div
                  className="flex gap-x-9 text-sm font-semibold text-body"
                  style={{ color: "white", fontSize: "17px" }}
                >
                 <a href="#"> {links.label}</a>
                </div>
              );
            })}
          </div>
          <div className="space-x-5"></div>
          <div className="flex gap-x-4">
            <div className=" h-12 pt-4 ">
              {/* <Cta
                buttonText="Order Online"
                url="#"
                style="text-white bg-orange shadow-xl"
              ></Cta> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
