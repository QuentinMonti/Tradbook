import React from "react";
import { Nav } from "../../Components/Nav/Nav";

export interface Props {}

export const AddExpression: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <Nav name="Add new expression"></Nav>
      <div className="form-group container-md col-6">
        <form method="POST" action="http://localhost:8000/addExpression">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Name of ew word" name="newExpression" />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea className="textarea" placeholder="Enter the definition of your word" name="description"></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button type="submit" value="Submit" className="button is-link">Add new expression</button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Cancel</button>
            </div>
          </div>
        </form>

      </div>
    </div>
    
  );
};
