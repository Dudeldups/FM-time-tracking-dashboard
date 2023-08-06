import { useState } from "react";
import Stat from "../Stat/Stat";
import User from "../User/User";
import "./Dashboard.scss";

type Props = {
  userData: UserData;
};

export default function Dashboard({ userData }: Props) {
  const [timeframe, setTimeframe] = useState("weekly");

  const { userName, avatar, stats } = userData;

  const allStats = stats.map(stat => {
    return <Stat key={stat.title} stat={stat} timeframe={timeframe} />;
  });

  return (
    <div className="dashboard">
      <User
        userName={userName}
        avatar={avatar}
        stats={stats}
        timeframe={timeframe}
        setTimeframe={setTimeframe}
      />
      {allStats}
    </div>
  );
}
