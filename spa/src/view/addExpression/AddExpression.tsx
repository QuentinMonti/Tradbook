import React from "react";

export interface Props {}

export const AddExpression: React.FunctionComponent<Props> = () => {
  return (
    <div>
        <form method="POST" action="http://localhost:8000/addExpression">
            <div>
                <label>Add a new expression
                <input type="text" name="newExpression" /></label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    </div>
    
  );
};
