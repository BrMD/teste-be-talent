export type propSearchSetState = {
  setState: React.Dispatch<React.SetStateAction<string>>;
};

enum job {
  FRONTEND = "Front-end",
  BACKEND = "Back-end",
}

export interface EmployeeDto {
  id: number;
  name: string;
  job: job;
  admission_date: Date;
  phone: string;
  image: string;
}

export interface Employee {
  id: number;
  name: string;
  job: job;
  admission_date: string;
  phone: string;
  image: string;
}

export type TableBodyType = {
  employees: Array<Employee> | undefined;
  searched: string;
};

export type TableType = {
  hideMobileColumnIndex: number;
  tableHeaders: Array<string>;
  children: React.ReactNode;
};

export type EmployeesArrayType = { employees: Array<Employee> | undefined };
