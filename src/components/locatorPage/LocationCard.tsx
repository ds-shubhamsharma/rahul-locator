import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "..//../types/search/locations";
import Hours from "..//../components/commons/hours";
import Address from "..//../components/commons/Address";
import { defaultTimeZone } from "../../config/globalConfig";
import { svgIcons } from "../../svg icon/svgIcon";

import {
  formatPhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";
import OpenCloseStatus from "..//../components/commons/OpenCloseStatus";
// import { GetDirection } from "../commons/GetDirection";
import GetDirection from "..//../components/commons/GetDirection";
import { Link } from "@yext/pages/components";
import Phone from "../commons/phone";

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
    // <div style={styles.scrollview}>
    <div className={`location result`} id={`result-${result.index}`}>
      <h3 className="">
        {" "}
        <a href={result.rawData.slug}>{result.rawData.name}</a>
        <p className="miles" style={{ marginLeft: "70%" }}>
          {metersToMiles(result.distance ?? 0)} miles
        </p>
      </h3>
      <Address address={address} />
      <Phone phone={result?.rawData?.mainPhone} />
      <GetDirection
        latitude={result?.rawData?.yextDisplayCoordinate?.latitude}
        longitude={result?.rawData?.yextDisplayCoordinate?.longitude}
      />
      <Link
        className="button before-icon ml-2"
        style={{ backgroundColor: "#894578" }}
        href={result.rawData.slug}
      >
        {svgIcons.viewdetails} {"view more"}
      </Link>
      <div className="icon-row openStatus">
        <span className="icon">{svgIcons.openclosestatus}</span>
        <OpenCloseStatus
          timezone={timezone ? timezone : defaultTimeZone}
          hours={hours}
        />
      </div>
    </div>
  );
};

export default LocationCard;
const styles = {
  scrollview: {
    height: "580px",
    width: "450px",
    border: "0px solid black",
    overflow: "auto",
  },
};
