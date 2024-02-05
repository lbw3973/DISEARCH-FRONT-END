interface ITags {
  id: number;
  name: string;
  count: number;
}

interface IGuild {
  features: string[];
  icon: string;
  id: string;
  name: string;
  owner: boolean;
  permissions: number;
  permissions_new: string;
}

interface IPostBoard {
  serverId: string;
  serverName: string;
  category: string;
  tag: string[];
  content: string;
}

interface IContent {
  serverName: string;
  img: string;
  category: string;
  tag: string[];
  content: string;
}

export type { ITags, IGuild, IPostBoard, IContent };
