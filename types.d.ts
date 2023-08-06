type Timeframe = {
  current: number;
  previous: number;
};

type Stat = {
  title: string;
  timeframes: {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
  };
};

type UserData = {
  userName: string;
  avatar: string;
  stats: Stat[];
};
