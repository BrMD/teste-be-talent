import Main from "./pages/Main";
import { useEffect, useState } from "react";
import { EmployeeDto } from "./components/types";
import { fixDatesFormatAndPhoneNumber } from "./components/utils";
const App = () => {
  const [employees, setEmployees] = useState<Array<EmployeeDto>>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/employees");
      const data = await response.json();
      setEmployees(await data);
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
