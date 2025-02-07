import { useState } from "react";
import { TrainingData } from "../../types";
import "./InputForm.css"

export default function InputForm({ dataProp, onOk }: { dataProp: TrainingData, onOk: (newData: TrainingData) => void }) {

    const [form, setForm] = useState({
        date: dataProp.date,
        path: dataProp.path
    });

    const handleNameChange = ({ target }) => {
        const { name, value } = target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
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
                                    type="text"
                                    pattern="[0-9]{2}[.][0-9]{2}[.][0-9]{2}"
                                    onChange={handleNameChange} />
                            </td>
                            <td>
                                <input
                                    id="path" name="path"
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