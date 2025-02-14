import { TrainingData } from "../../types";
import "../../utils"
import { formatDateDDMMYYYY } from "../../utils";

export default function Item({ data, onDelete, onEdit }: {
    data: TrainingData,
    onDelete: (d: TrainingData) => void,
    onEdit: (d: TrainingData) => void
}) {
    return (
        <tr>
            <td>{formatDateDDMMYYYY(data.date)}</td>
            <td>{data.path}</td>
            <td>
                <button onClick={() => onEdit(data)}>✎</button>
                <button onClick={() => onDelete(data)}>✘</button>
            </td>
        </tr>
    )

}