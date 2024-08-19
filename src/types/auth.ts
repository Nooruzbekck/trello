export interface LoginData {
  data: {
    email: string;
    password: string;
  };
  role?: string;
}

export interface Task {
  title: string;
  id: string;
  columns: any[];
}

export interface Column {
  columnId: string;
  columnTitle: string;
}
