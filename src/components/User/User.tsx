import "./User.scss";

type Props = {
  userName: string;
  avatar: string;
};

export default function User({ userName, avatar }: Props) {
  return (
    <div className="user">
      <article className="user__info">
        <img className="user__img" src={avatar} alt={userName} />
        <div>
          <p className="user__desc">Report for</p>
          <h2 className="user__name">{userName}</h2>
        </div>
      </article>
      <div className="user__button-container">
        <button>Daily</button>
        <button>Weekly</button>
        <button>Monthly</button>
      </div>
    </div>
  );
}
