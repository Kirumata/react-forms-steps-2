import { useState } from "react";
import { TrainingData } from "../../types";
import "./InputForm.css"
import moment from "moment";

export default function InputForm({ dataProp, onOk }: { dataProp: TrainingData, onOk: (newData: TrainingData) => void }) {

    const [form, setForm] = useState({
        date: dataProp.date,
        path: dataProp.path
    });

    const handleNameChange = ({ target }) => {
        const { name, value } = target;
        setForm(prevForm => ({ 
            ...prevForm, 
            [name]: target.type === 'number' ? parseInt(value) : value 
        }));
    }

    const handleClick = () => {
        onOk(form);
    }

    return (
        <div>
            <form>

                <table>
                    <thead>
                        <tr>
                            <td>
                                <label htmlFor="date" >Дата (ДД.ММ.ГГ.)</label>
                            </td>
                            <td>
                                <label htmlFor="path" >Пройдено км</label>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    id="date" name="date"
                                    value={form.date}
                                    type="date"
                                    onChange={handleNameChange} />
                            </td>
                            <td>
                                <input
                                    id="path" name="path"
                                    type="number"
                                    value={form.path}
                                    onChange={handleNameChange} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <button onClick={handleClick} >OK</button>
        </div>
    )
}