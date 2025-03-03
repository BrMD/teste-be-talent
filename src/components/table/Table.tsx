import { TableType } from "../types";
import "./table.css";

const TableHeader = ({ headers }: { headers: Array<string> }) => {
  return (
    <tr>
      {headers.map((item, index) => (
        <th className={index > 1 ? "hide-on-mobile" : ""} key={item}>
          <h3>{item}</h3>
        </th>
      ))}
      <th className="show-on-mobile bulletpoint">
        <h1>&bull;</h1>
      </th>
    </tr>
  );
};

const Table = ({ tableHeaders, children }: TableType) => {
  return (
    <table className="table">
      <thead>
        <TableHeader headers={tableHeaders} />
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
