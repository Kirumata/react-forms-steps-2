import { TrainingData } from "../../types";
import Item from "../Item/Item";

export default function List({ list, onDeleteItem, onEditItem }: { 
    list: TrainingData [], 
    onDeleteItem: (d: TrainingData) => void,
    onEditItem: (d: TrainingData) => void
 }) {
    
    let array = [];
    for (let i = 0; i < list.length; i++) {
        array.push(<Item key={list[i].date} data={list[i]} onDelete={() => onDeleteItem(list[i])} onEdit={() => onEditItem(list[i])}></Item>);
    }
    return (
        <table>
            <thead>
                <tr>
                    <td>Дата (ДД.ММ.ГГ)</td>
                    <td>Пройдено км</td>
                    <td>Действия</td>
                </tr>
            </thead>
            <tbody>
                {array}
            </tbody>
        </table>
    )

}