import React from "react";
import "./app.css";
import { Login } from "../Login/Login";
import { Nav } from "../../Components/Nav/Nav";
import Word from "../../Components/Word";


export interface Props {}

export const Application: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <Nav></Nav>
      <Login></Login>
      <Word></Word>
    </div>
  );

};