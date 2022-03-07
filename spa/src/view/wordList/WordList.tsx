import { stringify } from "querystring";
import React from "react"; 
import { Nav } from "../../Components/Nav/Nav";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Word } from "../../models/word.model";

export interface Props {};


//   date: { type: String },
//   en: { type: String },
//   fr: { type: String },
// };
const nbr = 3;

export const WordList: React.FunctionComponent<Props> = () => {
  var wordList: []
  return (
    <div>
      <Nav name ="Words List"></Nav>
      <Stack direction="row" spacing={2}>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
      {/* {fetch('http://localhost:8000/getWords').then(response => {
       
      })} */}
    </div>
  );
};

// function getListWord(){
//     return fetch('http://localhost:8000/getWords')
//     .then((response) => response.json())
//     .catch((error) => console.error(error))
// }

