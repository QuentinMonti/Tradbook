import React from "react";

export const Form = () => {
  return (
    <div className="form-group container-md col-6">
      <form className="g-3">
        <div className="col-auto mb-3">
          <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
          <input type="email" className="form-control" id="staticEmail2" placeholder="Email" />
        </div>
        <div className="col-auto mb-3">
          <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
          <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
        </div>
      </form>
    </div>
  );
}