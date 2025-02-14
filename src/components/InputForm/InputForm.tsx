import "./InputForm.css"

export default function InputForm(props) {
    return (
        <div>
            <form onSubmit={(e) => props.handleSubmit(e)}>

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
                                    value={props.date}
                                    type="date"
                                    onChange={(e) => props.handleDateChange(e.target.value)} />
                            </td>
                            <td>
                                <input
                                    id="path" name="path"
                                    type="number"
                                    value={props.path}
                                    onChange={(e) => props.handlePathChange(e.target.value)} />
                            </td>
                            <td><input type="submit" value="Submit" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}