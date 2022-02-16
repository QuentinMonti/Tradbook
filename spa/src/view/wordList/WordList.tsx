import { stringify } from "querystring";
import React from "react"; 
import { Nav } from "../../Components/Nav/Nav";

export interface Props {};

var wordList: string[];

export const WordList: React.FunctionComponent<Props> = () => {
  
  return (
    <div>
      <Nav></Nav>
      
    </div>
  );
};

function getListWord() {
    fetch('http://localhost:8000/getWords')
        .then(async response => {
            // const data = await response.json();
            wordList = await response.json();


            // check for error response
            // if (!response.ok) {
            //     // get error message from body or default to respon se statusText
            //     const error = (data && wordList.message) || response.statusText;
            //     return Promise.reject(error);
            // }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

