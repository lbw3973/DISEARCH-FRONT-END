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

export type { ITags, IGuild };
