import React, { useContext } from "react";
import { DataContext } from "../App";

function About() {
  const data = useContext(DataContext);
  return <>{`About ${data}`}</>;
}
export default About;
