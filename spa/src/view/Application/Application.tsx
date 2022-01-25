import React from "react";
import "./app.css";
import { Form } from "./Components/Form";
import { Nav } from "./Components/Nav";
export interface Props {}

export const Application: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <Nav></Nav>
      <Form></Form>
    </div>
  );

};