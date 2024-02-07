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
  iconId: string;
  category: string;
  tag: string[];
  content: string;
}

interface IContentItem {
  serverName: string;
  serverId: string;
  iconId: string;
  category: string;
  tag: string[];
  content: string;
  createdAt: string;
}

interface IContent {
  list: IContentItem[];
  totalElements: number;
  totalPages: number;
  curPage: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export type { ITags, IGuild, IPostBoard, IContentItem, IContent };
