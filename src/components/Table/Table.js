import { useSelector } from "react-redux";
import TableRow from "./components/TableRow";
import "./Table.scss";

const tableHeadings = ["City", "Current AQI", "Last Updated"];

const Table = () => {
  return (
    <section className="table">
      <table>
        <thead>
          <tr>
            {tableHeadings.map((itm) => (
              <th key={itm}>{itm}</th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </section>
  );
};

export default Table;
