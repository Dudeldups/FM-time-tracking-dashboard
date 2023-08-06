import "./Stat.scss";

type Props = {
  stat: Stat;
};

export default function Stat({ stat }: Props) {
  return (
    <div className="stat">
      <article className="stat__details">
        <div className="stat__top">
          <h2 className="stat__title">{stat.title}</h2>
          <button className="stat__menu-button">
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="stat__bottom">
          <p className="stat__time-current">
            {stat.timeframes.weekly.current}hrs
          </p>
          <p className="stat__time-previous">
            Last Week - {stat.timeframes.weekly.previous}hrs
          </p>
        </div>
      </article>
    </div>
  );
}
