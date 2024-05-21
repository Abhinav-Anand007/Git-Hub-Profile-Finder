import React from "react";

function Card({ user }) {
  const {
    avatar_url,
    followers,
    following,
    location,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div className="nameDiv">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p className="nameP">
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <hr className="solid"/>
      <div>
        <div>
          <div className="outerDiv">
            <p className="pUp">{public_repos}</p>
            <p className="pDown">PUBLIC REPOS</p>
          </div>
          <div className="outerDiv">
            <p className="pUp">{followers}</p>
            <p className="pDown">FOLLOWERS</p>
          </div>
          <div className="outerDiv">
            <p className="pUp">{following}</p>
            <p className="pDown">FOLLOWING</p>
          </div>
        </div>
        <hr class="solid"/>
        <p className="locDown">{location}</p>
      </div>
    </div>
  );
}

export default Card;
