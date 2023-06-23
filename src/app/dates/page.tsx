import { DateTime } from "luxon";
import { headers } from "next/headers";

export default function Dates() {
  const headersList = headers();
  const referer = headersList.get("referer");

  const utcnow = DateTime.utc();
  const timestamp = utcnow.toFormat("yyyy-MM-dd HH:mm:ss");
  const headerListElems = [];
  for (const [key, value] of headersList.entries()) {
    headerListElems.push(
      <li>
        {key}: {value}
      </li>
    );
  }
  return (
    <div>
      <p>Server Time: {timestamp}</p>
      <h3>Headers:</h3>
      <ul>{headerListElems}</ul>
    </div>
  );
}
