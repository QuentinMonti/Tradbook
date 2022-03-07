import React from "react"; 
import { Nav } from "../../Components/Nav/Nav";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export interface Props {}


const languages = [
  {
    value: 'fr',
    label: 'Francais',
  },
  {
    value: 'en',
    label: 'Anglais',
  },
  {
    value: 'es',
    label: 'Espagnol',
  }
];

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export const AddWord: React.FunctionComponent<Props> = () => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const [language, setLanguage] = React.useState('Anglais');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('newWord'),
      description: data.get('description'),
      langue: data.get('langue'),
      password: data.get('description'),
      wordTranslate: data.get('wordTranslate'),

    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <Nav name="Add new Word"></Nav>
      <div className="form-group container-md col-6">
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <form method="POST" action="http://localhost:8000/addWord">
            <div className="field">
              <label className="label">Word</label>
              <div className="control">
                <input className="input" type="text" placeholder="Name of new word" name="newWord" required/>
              </div>
            </div>

            <div className="field">
              <label className="label">Traduction</label>
              <TextField
                id="outlined-select-currency"
                name="langue"
                select
                label="Langues"
                value={language}
                onChange={handleChange}
                helperText="Please select traduction language"
                required
              >
                {languages.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="field">
              <label className="label">Word translate</label>
              <div className="control">
                <input className="input" type="text" placeholder="Word translation" name="wordTranslate" required/>
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea className="textarea" placeholder="Enter the definition of your word" name="description" required></textarea>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button onClick={handleClick} type="submit" value="Submit" className="button is-link">Add new word</button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Cancel</button>
              </div>
            </div>
          </form>
        </Box> <br />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            This word is added successfully !
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};
