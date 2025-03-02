import { Employee, TableBodyType } from "../../types";
import { filterArrayEmployees } from "../../utils";
import TableRow from "./TableRow";

const TableBody = ({ employees, searched }: TableBodyType) => {
  return (
    <>
      {employees !== undefined
        ? employees
            .filter((employee) => {
              if (filterArrayEmployees(searched, employee)) return employee;
            })
            .map((employee: Employee) => (
              <TableRow key={employee.name} employee={employee} />
            ))
        : ""}
    </>
  );
};

export default TableBody;
