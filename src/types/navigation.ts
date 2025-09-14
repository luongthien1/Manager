export interface NavigationItem {
  id: string;
  title: string;
  icon?: string;
  children?: NavigationItem[];
  path?: string;
}

export interface NavigationState {
  expandedItems: Set<string>;
  activeItem: string | null;
  breadcrumb: string[];
}