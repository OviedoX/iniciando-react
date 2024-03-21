import PropTypes from "prop-types";
import { useState } from "react";

function FollowebCard({ name, username, photo, initIsFollowing }) {
  const [follow, updateFollow] = useState(initIsFollowing),
    btnClassName = follow ? "follow-btn-bg-act" : "",
    textFollow = follow ? "Siguiendo" : "Seguir";

  //handlers events
  const handlerClick = (event) => {
    let element = event.target;

    if (element instanceof HTMLSpanElement)
      element.parentElement.classList.toggle("follow-btn-bg-act");

    updateFollow(!follow);
  };

  //return card
  return (
    <article className="tw-card-article">
      <header className="tw-card-header">
        <img className="tw-card-avatar" src={photo} alt="avatar" />
        <div className="tw-card-infouser">
          <strong>{name}</strong>
          <span>@{username}</span>
        </div>
      </header>
      <aside className="tw-card-aside">
        <button
          onClick={handlerClick}
          className={`tw-card-button ${btnClassName}`}
        >
          <span>{textFollow}</span>
          <span className="stopFollowing">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

FollowebCard.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  photo: PropTypes.string,
  initIsFollowing: PropTypes.bool,
};

export default FollowebCard;
