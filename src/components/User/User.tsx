import "./User.scss";

type Props = {
  userName: string;
  avatar: string;
  stats: Stat[];
  timeframe: string;
  setTimeframe: React.Dispatch<React.SetStateAction<Timeframes>>;
};

export default function User({
  userName,
  avatar,
  stats,
  timeframe,
  setTimeframe,
}: Props) {
  const inputs = Object.keys(stats[0].timeframes).map(cur => {
    const current = cur as Timeframes;
    return (
      <div key={current}>
        <input
          className="sr-only input-container__input"
          type="radio"
          name="timeframe"
          id={current}
          checked={current === timeframe}
          onChange={() => setTimeframe(current)}
        />
        <label className="input-container__label" htmlFor={current}>
          {current}
        </label>
      </div>
    );
  });

  return (
    <div className="user">
      <article className="user__info">
        <img className="user__img" src={avatar} alt={userName} />
        <div>
          <p className="user__desc">Report for</p>
          <h2 className="user__name">{userName}</h2>
        </div>
      </article>
      <fieldset className="input-container">
        <legend className="sr-only">Select timeframe</legend>
        {inputs}
      </fieldset>
    </div>
  );
}
