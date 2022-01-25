import React from "react";
import "./app.css";
import { Login } from "../Login/Login";
export interface Props {}

export const Application: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <Login></Login>
    </div>
  );

};