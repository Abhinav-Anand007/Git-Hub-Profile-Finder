import React, { useEffect, useState } from "react";
import Card from "./Card";

function Githubprofile() {
  const [username, setUsername] = useState("Anderson");
  const [userdata, setUserdata] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if (data) {
      setUserdata(data);
      setLoading(false);
      setUsername("");
    }
    console.log(data);
  }

  function handleSubmit() {
      fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return (
        <div className="loadingDiv">
            <div class="spinner-border text-light loading-spinner" role="status">
                <span class="sr-only">Loading...</span>
            </div>
       
            <h1 className="loadingHead"> Loading data! Please wait.</h1>
        </div>
    );
  }

  return (
    <center>
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input 
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => { 
                if (e.which === 13) { 
                    handleSubmit();
                }
            }}
        />
      </div>
      <button type="button" className="btn btn-primary btnSearch" onClick={handleSubmit}>Search</button>
      {userdata !== null ? <Card user={userdata} /> : null}
      
    </div>
    </center>
  );
}

export default Githubprofile;
