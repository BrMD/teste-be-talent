import Main from "./pages/Main";
import { useEffect, useState } from "react";
import { EmployeeDto } from "./types";
import { fixDatesFormatAndPhoneNumber } from "./utils";
const App = () => {
  const [employees, setEmployees] = useState<Array<EmployeeDto>>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/employees");
        const data = await response.json();
        setEmployees(await data);
      } catch (e) {}
    };

    fetchData();
    return () => {};
  }, []);
  const fixedEmployees = employees?.map((value) =>
    fixDatesFormatAndPhoneNumber(value)
  );
  return <Main employees={fixedEmployees} />;
};

export default App;
