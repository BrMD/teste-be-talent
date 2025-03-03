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
    if (colspan === 5) setColspan(3);
    if (colspan === 3) setColspan(5);
  };
  window
    .matchMedia("(min-width: 480px)")
    .addEventListener("change", handleResize);

  const renderContent = () => {
    if (employees === undefined) {
      return (
        <tr className="row error">
          <td colSpan={colspan} className="errorFetchData">
            <h3>Erro ao requisitar dados</h3>
          </td>
        </tr>
      );
    }

    if (!filteredEmployees || filteredEmployees.length === 0) {
      return (
        <tr className="row error">
          <td colSpan={colspan}>
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
