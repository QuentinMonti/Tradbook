import React from "react";
import "./app.css";
export interface Props {}

export const Application: React.FunctionComponent<Props> = () => {
  return <header>
    <nav>
      <ul>
        <li><a href="">Login</a></li>
        <li><a href="">Languages</a></li>
        <li><a href="">Words</a></li>
        <li><a href="">AddWords</a></li>
        <li className="Logo"><a href="">TradBook</a></li>
      </ul>
      
    </nav>
  </header>

};
