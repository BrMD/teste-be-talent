import { useMemo, useState } from "react";
import { Employee, TableBodyType } from "../../types";
import { filterArrayEmployees } from "../../utils";
import TableRow from "./TableRow";
import "./tablebody.css";

const TableBody = ({ employees, searched }: TableBodyType) => {
  const [colspan, setColspan] = useState(5);
  const filteredEmployees = useMemo(() => {
    return employees !== undefined
      ? employees.filter((employee) => filterArrayEmployees(searched, employee))
      : [];
  }, [employees, searched]);

  const handleResize = () => {
    setColspan(3);
  };
  window
    .matchMedia("(max-width: 480px)")
    .addEventListener("change", handleResize);

  const renderContent = () => {
    if (employees === undefined) {
      return (
        <tr>
          <td className="errorFetchData">
            <h3>Nenhum resultado encontrado</h3>
          </td>
        </tr>
      );
    }

    if (!filteredEmployees || filteredEmployees.length === 0) {
      return (
        <tr>
          <td className="errorFetchData">
            <h3>Nenhum resultado encontrado</h3>
          </td>
        </tr>
      );
    }

    return filteredEmployees.map((employee: Employee) => (
      <TableRow key={employee.name} employee={employee} />
    ));
  };
  return <>{renderContent()}</>;
};

export default TableBody;
