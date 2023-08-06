import "./Stat.scss";

type Props = {
  stat: Stat;
  timeframe: keyof Stat["timeframes"];
  key: React.Key;
};

export default function Stat({ stat, timeframe }: Props) {
  let timeframeAsNoun;
  switch (timeframe) {
    case "daily":
      timeframeAsNoun = "day";
      break;

    case "weekly":
      timeframeAsNoun = "week";
      break;

    case "monthly":
      timeframeAsNoun = "month";
      break;

    default:
      break;
  }

  const { current, previous } = stat.timeframes[timeframe];

  return (
    <div className="stat" key={stat.title}>
      <article className="stat__details">
        <div className="stat__top">
          <h2 className="stat__title">{stat.title}</h2>
          <button className="stat__menu-button">
            <img src="/assets/images/icon-ellipsis.svg" alt="" />
            <span className="sr-only">See details for {stat.title}</span>
          </button>
        </div>

        <div className="stat__bottom">
          <p className="stat__time-current">{current}hrs</p>
          <p className="stat__time-previous">
            Last {timeframeAsNoun} - {previous}hrs
          </p>
        </div>
      </article>
    </div>
  );
}
