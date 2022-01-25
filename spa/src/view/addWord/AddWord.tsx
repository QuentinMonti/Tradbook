import React from "react";

export interface Props {}

export const AddWord: React.FunctionComponent<Props> = () => {
  return (
    <div>
        <form method="POST" action="http://localhost:8000/addWord">
            <div>
                <label>Add a new word 
                <input type="text" name="newWord" /></label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    </div>
    
  );
};
