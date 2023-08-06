type Timeframe = {
  current: number;
  previous: number;
  [key: string]: number;
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
