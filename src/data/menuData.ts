import { MenuSection } from "../types";

export const menu: MenuSection[] = [
  {
    id: 1,
    listItems: [
      { id: 1, title: "Homepage", url: "/", icon: "home" },
      { id: 2, title: "Profile", url: "/users/1", icon: "user" },
      { id: 3, title: "Dashboard", url: "/dashboard", icon: "dashboard" },
      { id: 4, title: "Users", url: "/users", icon: "users" },
      { id: 5, title: "Timesheet", url: "/timesheet", icon: "product" },
      { id: 6, title: "Purchase Order", url: "/orders", icon: "order" },
      { id: 7, title: "Delivery Docket", url: "/posts", icon: "post2" },
    ],
  },
  {
    id: 2,
    listItems: [
      { id: 1, title: "Equipment", url: "/equipment", icon: "element" },
      { id: 2, title: "Suppliers", url: "/suppliers", icon: "element" },
      { id: 3, title: "Resource Assigner", url: "/resource", icon: "note" },
      { id: 4, title: "Forms", url: "/forms", icon: "form" },
      { id: 5, title: "Files Manager", url: "/calenders", icon: "calendar" },
      { id: 6, title: "Settings", url: "/setting", icon: "setting" },
    ],
  },
];
