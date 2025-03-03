import { Employee, EmployeeDto } from "../types";

export const filterArrayEmployees = (search: string, employee: Employee) => {
  if (employee.job.toLowerCase().includes(search)) return true;
  if (employee.name.toLowerCase().includes(search)) return true;
  if (employee.phone.includes(search)) return true;
  if (employee.admission_date.includes(search)) return true;
  return false;
};

const transformDate = (date: Date) => {
  const newDate = new Date(date);
  const day =
    newDate.getUTCDate() < 10
      ? `0${newDate.getUTCDate()}`
      : newDate.getUTCDate();

  const month =
    newDate.getUTCMonth() < 10
      ? `0${newDate.getUTCMonth() + 1}`
      : newDate.getUTCMonth() + 1;

  const year = newDate.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

const transforPhone = (phone: string) => {
  return `+${phone.slice(0, 2)} (${phone.slice(2, 4)}) ${phone.slice(
    4,
    9
  )}-${phone.slice(10)}`;
};

export const fixDatesFormatAndPhoneNumber = (employeeDto: EmployeeDto) => {
  const employee: Employee = {
    id: employeeDto.id,
    name: employeeDto.name,
    job: employeeDto.job,
    admission_date: transformDate(employeeDto.admission_date),
    phone: transforPhone(employeeDto.phone),
    image: employeeDto.image,
  };
  return employee;
};
