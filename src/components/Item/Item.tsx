import moment from "moment";
import { TrainingData } from "../../types";

export default function Item({ data, onDelete, onEdit }: {
    data: TrainingData,
    onDelete: (d: TrainingData) => void,
    onEdit: (d: TrainingData) => void
}) {

    return (
        <tr>
            <td>{moment(data.date).format('DD.MM.YY')}</td>
            <td>{data.path}</td>
            <td>
                <button onClick={() => onEdit(data)}>✎</button>
                <button onClick={() => onDelete(data)}>✘</button>
            </td>
        </tr>
    )

}