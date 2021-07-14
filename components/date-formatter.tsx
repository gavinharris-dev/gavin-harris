import { format, parseISO } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time style={{ height: "min-content" }} dateTime={dateString}>
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
};

export default DateFormatter;
