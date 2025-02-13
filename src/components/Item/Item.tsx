import moment from "moment";
import { TrainingData } from "../../types";

export default function Item({ data, onDelete, onEdit }: {
    data: TrainingData,
    onDelete: (d: TrainingData) => void,
    onEdit: (d: TrainingData) => void
}) {

    let newDate: Date = new Date(data.date);

    const yyyy = newDate.getFullYear();
    let mm = newDate.getMonth() + 1; // Months start at 0!
    let dd = newDate.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '.' + mm + '.' + yyyy;

    return (
        <tr>
            <td>{formattedToday}</td>
            <td>{data.path}</td>
            <td>
                <button onClick={() => onEdit(data)}>✎</button>
                <button onClick={() => onDelete(data)}>✘</button>
            </td>
        </tr>
    )

}