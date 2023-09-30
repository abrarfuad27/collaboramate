import React, { useState } from "react";

export default function Intro() {
  const [userInfo, setUserInfo] = useState("");

  function handleSubmit(ev){
    ev.preventDefault();
  }

  return (
    <div className="intro-container">
      <form className="intro-form" onSubmit={handleSubmit}>
        <label htmlFor="userInfo" className="intro-label">
          <b>Tell us about yourself!</b>
        </label>
        <textarea
          value={userInfo}
          name="userInfo"
          onChange={ev=>setUserInfo(ev.target.value)}
          className="intro-textarea"
        ></textarea>
        <button type="submit"> Find team</button>
      </form>
    </div>
  );
}
