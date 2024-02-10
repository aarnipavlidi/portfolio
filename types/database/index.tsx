import type { currentPageTypesForRevalidate } from '@/types/prismic';

interface PathsTableProps {
  id: string;
  uid: string;
  type: currentPageTypesForRevalidate;
  slug: string[];
  destination: string;
  latestUpdate?: Date;
  deleteStatus?: boolean;
};

export interface PortfolioDatabaseProps {
  paths: PathsTableProps;
};
