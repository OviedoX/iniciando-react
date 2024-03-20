

function FollowebCard({name, username, photo}) {
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
        <button className="tw-card-button">Seguir</button>
      </aside>
    </article>
  );
}

export default FollowebCard;
