// src/types.ts

export interface ListItem {
    id: number;
    title: string;
    url: string;
    icon: string;
  }
  
  export interface MenuItem {
    id: number;
    title: string;
    listItems: ListItem[];
  }
  