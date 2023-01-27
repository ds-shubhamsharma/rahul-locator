import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import { Link } from "@yext/pages/components";
import * as React from "react";
import Banner from "../components/self/banner";
import Card from "../components/self/card";
import Details from "../components/self/details";
import Footer from "../components/self/footer";
import Header from "../components/self/header";
import Hours from "../components/self/hours";
import StaticMap from "../components/locationDetails/StaticMap";
import "../index.css";
import IframeMap from "../components/locationDetails/IframeMap";

export const config: TemplateConfig = {
  stream: {
    $id: "location_data",

    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "photoGallery",
      "hours",
      "slug",
      "yextDisplayCoordinate",
    ],

    filter: {
      entityTypes: ["location"],
    },

    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ? document.slug : `${document.id.toString()}`;
};

export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
        },
      },
    ],
  };
};

const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    name,
    address,
    hours,
    mainPhone,
    yextDisplayCoordinate,
    description,
    photoGallery
  } = document;


  const images = photoGallery.map((img: any) => {
    return <img src={img.image.url} />;
  });
  return (
    <>
      <Header />
      <Banner />

      <div
        className="centered-container"
        style={{ backgroundColor: "#c0ebf1" }}
      >
        <div className="section">
          <div className="grid grid-cols-2 gap-x-10 gap-y-10">
            <div>
              <Details name={name} address={address} phone={mainPhone} />
            </div>
            <div> {hours && <Hours title={name} hours={hours} />}</div>
            <Card
              name={<p className="text-xl font-semibold">{`About ${name}`}</p>}
              item={description}
            />
            <div>
              <IframeMap address={address} />
            </div>
            <div>{images}</div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Location;
