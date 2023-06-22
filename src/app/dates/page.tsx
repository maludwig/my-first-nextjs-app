import { DateTime } from "luxon";

export default function Dates() {
  const utcnow = DateTime.utc();
  const timestamp = utcnow.toFormat("yyyy-MM-dd HH:mm:ss");
  return <p>Server Time: {timestamp}</p>;
}
