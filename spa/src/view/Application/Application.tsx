import React from "react";
import "./app.css";
import { Nav } from "../../Components/Nav/Nav";
import Word from "../../Components/Word";

export interface Props {}

export const Application: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <Nav name="HomePage"></Nav>
      <Word></Word> 
      <div style={{display: 'flex',  justifyContent:'center', height: '100vh'}}>
        <h1> I am centered </h1>
      </div>
    </div>
  );
};