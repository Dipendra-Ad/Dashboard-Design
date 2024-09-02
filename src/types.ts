// navbar section
export type AnchorEl = null | HTMLElement;

export type NavbarProps = {
  isAuthenticated: boolean;
  logout: () => void;
};

// menu section data type
export interface ListItem {
  id: number;
  title: string;
  url: string;
  icon: string;
}

export interface MenuItem {
  id: number;
  title: string;
  url: string;
  icon: string;
}

export interface MenuSection {
  id: number;
  listItems: MenuItem[];
}
// suppliers table data type
export interface Data {
  sNo: number;
  name: string;
  address: string;
  email: string;
  phone: string;
}

// dashboard
export interface Project {
  id: number;
  title: string;
  status: string;
  completedOn?: string;
}

///login
export interface LoginFormData {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  expiresIn: number;
}

// delete modal props
export interface DeleteModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

/// for authcontext

export interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
