import { useState } from "react";
import { Employee } from "../../types";
import "./tablerow.css";

const TableRow = ({ employee }: { employee: Employee }) => {
  const [active, setActive] = useState(false);
  const handleResize = () => {
    setActive(false);
  };
  window
    .matchMedia("(max-width: 480px)")
    .addEventListener("change", handleResize);
  return (
    <>
      <tr key={employee.id} className={active ? "row" : "row addedBorder"}>
        <td>
          <img src={employee.image} alt={employee.name} />
        </td>
        <td>{employee.name}</td>
        <td className="hide-on-mobile">{employee.job}</td>
        <td className="hide-on-mobile">{employee.admission_date}</td>
        <td className="hide-on-mobile">{employee.phone}</td>
        <td className="expandButton show-on-mobile">
          <button
            className="expandButton"
            onClick={() => setActive((state) => !state)}
          >
            <img
              src="./svg/expandIcon.svg"
              alt="expandIcon"
              className={active ? "expandedAnimation" : ""}
            />
          </button>
        </td>
      </tr>
      {active && (
        <tr className="row addedBorder">
          <td colSpan={3}>
            <div className="expandedDiv">
              <h2>Cargo</h2>
              <h3>{employee.job}</h3>
            </div>
            <div className="expandedDiv">
              <h2>Data de Amissão</h2>
              <h3>{employee.admission_date}</h3>
            </div>
            <div className="expandedDiv">
              <h2>Telefone</h2>
              <h3>{employee.phone}</h3>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
