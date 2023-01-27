import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "..//../types/search/locations";
import Hours from "..//../components/commons/hours";
import Address from "..//../components/commons/Address";
import {
  formatPhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";
import OpenCloseStatus from "..//../components/commons/OpenCloseStatus";
// import { GetDirection } from "../commons/GetDirection";
import GetDirection from "..//../components/commons/GetDirection";

const metersToMiles = (meters: number) => {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
};

const LocationCard: CardComponent<Location> = ({ result }) => {
  const { address, hours, mainPhone, timezone } = result.rawData;
  const formattedPhone = formatPhoneNumber(mainPhone);
  // console.log("first===>", result.rawData);

  const [timeStatus, setTimeStatus] = useState("");
  const onOpenHide = () => {
    if (timeStatus == "") {
      setTimeStatus("active");
    } else {
      setTimeStatus("");
    }
  };

  return (
    <div className={`location result`} id={`result-${result.index}`}>
      <h3 className="">
        {" "}
        <a href={result.rawData.slug}>{result.rawData.name}</a>
        <p className="miles" style={{ marginLeft: "70%" }}>
          {metersToMiles(result.distance ?? 0)} miles
        </p>
      </h3>
      

      {/* <p className="text-sm text-slate-700">{address.line1}</p>
      <p className="text-sm text-slate-700">{address.city}, {address.region}, {address.postalCode} </p> */}
      <Address address={address} />
      <GetDirection
        latitude={result?.rawData?.yextDisplayCoordinate?.latitude}
        longitude={result?.rawData?.yextDisplayCoordinate?.longitude}
      />
      <a href={result.rawData.slug}><button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          style={{ backgroundColor: "#894578", borderRadius: "5px" }}
        >
          {"view more "}
        </button></a> 
    </div>
  );
};

export default LocationCard;
