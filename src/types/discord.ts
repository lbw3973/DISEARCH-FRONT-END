interface IUserInfo {
  id: string;
  email: string;
  global_name: string;
  username: string;
}

interface IUserGuildsInfo {
  id: string;
  name: string;
  image: string;
}

export type { IUserInfo, IUserGuildsInfo };
