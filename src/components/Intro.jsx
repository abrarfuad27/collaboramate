import React, { useState } from "react";
import axios from "axios";

export default function Intro() {
  const [userInfo, setUserInfo] = useState("");
  const [data,setData] = React.useState([{}]);

  React.useEffect(() => {
    
  },[])



  async function handleSubmit(ev) {
    ev.preventDefault();
    const userData = { userInfo };

    try {
      // Send a POST request to your Express server
      const response = await axios.post("http://localhost:4000/find", userData);

      // Handle the response data from the server, if needed
      console.log(response);
    } catch (error) {
      // Handle any errors that occur during the POST request
      console.error("Error:", error);
    }
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
          onChange={(ev) => setUserInfo(ev.target.value)}
          className="intro-textarea"
        ></textarea>
        <button type="submit"> Find team</button>
      </form>
    </div>
  );
}
