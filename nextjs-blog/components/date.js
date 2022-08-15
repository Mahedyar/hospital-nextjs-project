import { format, parseISO } from "date-fns";

const Date = ({ dateString }) => {
  const date = parseISO(dateString);
//   console.log(dateString);
//   console.log(date);
  return <time dateTime={dateString}>{format(date, "LLLL d,yyyy")}</time>;
};

export default Date;
