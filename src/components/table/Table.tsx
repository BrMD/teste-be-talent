import { TableType } from "../types";
import "./table.css";

const TableHeader = ({
  headers,
  hideMobileColumnIndex,
}: {
  headers: Array<string>;
  hideMobileColumnIndex: number;
}) => {
  return (
    <tr>
      {headers.map((item, index) => (
        <th
          className={index > hideMobileColumnIndex ? "hide-on-mobile" : ""}
          key={item}
        >
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
        <TableHeader headers={tableHeaders} hideMobileColumnIndex={1} />
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
