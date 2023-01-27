import * as React from "react";
import image from "../../assets/image/logos.png";
type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "#",
  },    
  {
    label: "Faq",
    url: "#",
  }, 
  {
    label: "location",
    url: "#",
  }, 
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <div className="" style={{backgroundColor:"#101010"}}>
      <div className="centered-container">
        <nav className="py-6 flex items-center justify-between">
          <div className="flex gap-x-4 items-center">
            <img
              src="https://images.unsplash.com/photo-1620194544222-8c956ca15f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
             style={{width:"100px",height:"80px" ,borderRadius:"10px", marginLeft:"10px"}}
              
            ></img>

            <div className="flex gap-x-4 text-sm font-semibold text-body" style={{color:"white",fontSize:"17px"}}>
              {linkDoms}
            </div>
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
