import React, { useContext } from "react";
import { DataContext } from "../App";

const About = () => {
  const data = useContext(DataContext);
  return <>About {data}</>;
};
export default About;
