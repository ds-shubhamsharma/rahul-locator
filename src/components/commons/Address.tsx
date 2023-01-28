import * as React from "react";

const Address = (props: any) => {  
    const { address } = props; 
    // console.log('props', props)
  return (
    <>
      <div className="icon-row location-address"><span className="icon"><img src={""} /></span> 
        <div>{address.line1}</div>
            {/* {address.line2 && (<div>{address.line2}</div>)} */}
            <div>{address.region}, {address.city},  </div>
            <div>{address.countryCode}, {address.postalCode}</div>   
    
      </div>
    </>
  );
};

export default Address;
