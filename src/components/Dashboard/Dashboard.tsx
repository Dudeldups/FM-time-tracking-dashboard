import Stat from "../Stat/Stat";
import User from "../User/User";
import "./Dashboard.scss";

type Props = {
  userData: UserData;
};

export default function Dashboard({ userData }: Props) {
  const { userName, avatar, stats } = userData;

  const allStats = stats.map(stat => {
    return <Stat stat={stat} />;
  });

  return (
    <div className="dashboard">
      <User userName={userName} avatar={avatar} />
      {allStats}
    </div>
  );
}
