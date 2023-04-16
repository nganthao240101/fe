import React from "react";

import { useQuery } from "@tanstack/react-query";
import { CircularProgress } from "@material-ui/core";

import Bannerslider from "../banner-carousel";
import Topsavers from "./top-section";
import Bestofferbanner from "./best-offers-banner";
import Topstample from "./top-stample";
import { getAllTopStample } from "../../../services/TopStample";

const Home = () => {
  const { data: topStamples, isLoading } = useQuery(
    ["get-top-stample"],
    getAllTopStample
  );

  return (
    <div className="wrapper">
      <Bannerslider />
      <Topsavers />
      <Bestofferbanner />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Topstample topStamples={topStamples} />
      )}
    </div>
  );
};

export default Home;
