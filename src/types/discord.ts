interface IUserInfo {
  id: string;
  email: string;
  name: string;
  nickName: string;
}

interface IUserGuildsInfo {
  id: string;
  name: string;
  image: string;
}

export type { IUserInfo, IUserGuildsInfo };
