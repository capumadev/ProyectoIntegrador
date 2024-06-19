import { useState } from "react";

export function XFollowCard({ children, username, name,isFollowing}) {
    const img = `https://unavatar.io/twitter/${username}`;
    const {following, setFollowing} = useState(isFollowing)
    return (
      <article className="tw-followcard">
        <header className="tw-followcard-header">
          <img className="tw-followcard-avatar" src={img} />
          <div className="tw-followcard-info">
            <strong>{name}</strong>
            <span>{username}</span>
          </div>
        </header>
        <aside>
          <button className="tw-followcard-button">Seguir</button>
        </aside>
      </article>
    );
  }