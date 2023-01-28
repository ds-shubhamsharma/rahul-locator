import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import GetDirection from "../../components/commons/GetDirection";
import OpenCloseStatus from "../../components/commons/OpenCloseStatus";
import {
  limit,
  radius,
  baseApiUrl,
  liveAPIKey,
  savedFilterId,
  entityTypes,
} from "../../config/globalConfig";
import {
  formatPhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";
import Address from "../../components/commons/Address";
import phonePin from "..//../images/phone.svg";
import Card from "../self/card";
import { svgIcons } from "../../svg icon/svgIcon";
import { Link } from "@yext/pages/components";

type props = {
  latitude: any;
  longitude: any;
};
const NearByLocations = (props: any) => {
  const { latitude, longitude } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    getRestoData();
  }, []);
  function getRestoData() {
    let url = `${baseApiUrl}/entities/geosearch?radius=500&location=${latitude},${longitude}&api_key=${liveAPIKey}&v=20181201&resolvePlaceholders=true&entityTypes=${entityTypes}&limit=4`;
    return axios
      .get(url)
      .then((res) => {
        setData(res.data.response.entities);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <h2 className="text-xl font-semibold mb-8" style={{marginLeft:"50%" ,color:"black"}}>Near By Locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data ? (
          <>
            {data.map((i: any) => {
              return (
                <>
                  <Card
                    item={
                      <div className="markerContent w-30 md:w-[350px] font-universpro font-normal text-darkgrey text-xs md:text-sm leading-6">
                        <div className="markerContent">
                          <h3 className="nameData font-bold text-sm md:text-base">
                            <a href={i.slug}>{i.name}</a>
                          </h3>
                          <div className="store-address">
                            <Address address={i.address} />
                          </div>
                          <div className="store-phone">
                            <a>
                              {" "}
                              {svgIcons.phone}
                              {formatPhoneNumber(i.mainPhone)}
                            </a>
                          </div>
                          <div className="store-link">
                            {svgIcons.openclosestatus}
                            <OpenCloseStatus
                              timezone={i.timezone}
                              hours={i.hours}
                            ></OpenCloseStatus>
                          </div>
                          <div className="store-link">
                            <GetDirection
                              buttonText="Get Direction"
                              className={" primary-button"}
                              latitude={i.yextDisplayCoordinate.latitude}
                              longitude={i.yextDisplayCoordinate.longitude}
                            />
                            <Link
                              style={{ backgroundColor: "#894578" }}
                              className="button"
                              href={i.slug}
                            >
                              {svgIcons.viewdetails} {"view more"}
                            </Link>
                          </div>
                    
                        </div>
                      </div>
                    }
                  />
                </>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default NearByLocations;
