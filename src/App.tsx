import { useState } from "react";
import InputForm from "./components/InputForm/InputForm"
import List from "./components/List/List"
import { TrainingData } from "./types";
import "./utils"
import { compareByDate } from "./utils";

function App() {

  const [state, setState] = useState<TrainingData>({ date: '', path: 0 });
  const [list, setList] = useState<TrainingData[]>([]);
  const [action, setAction] = useState<"edit" | "add">("add");

  function deleteItem(newData: TrainingData) {
    console.log(newData);
    let newArray = [];
    for (let i = 0; i < list.length; i++) {
      newArray.push(list[i]);
    }

    let rem = newArray.findIndex(newArray => newArray.date === newData.date);
    if (rem !== -1) {
      newArray.splice(rem, 1);
    }

    setState(newData);
    setList(newArray);
  }

  function editItem(newData: TrainingData) {
    setState(newData);
    setAction("edit");
  }

  function handleDateChange(e) {
    let newData: TrainingData = { date: e, path: state.path }
    setState(newData);
  }

  function handlePathChange(e) {
    let newData: TrainingData = { date: state.date, path: parseInt(e) }
    setState(newData);
  }

  function handleSubmit(e) {
    let newArray = [];
    for (let i = 0; i < list.length; i++) {
      newArray.push(list[i]);
    }
    let index: number = newArray.findIndex(item => item.date === state.date);

    if (index === -1) {
      newArray.push(state);
    }
    else {
      if (action == "add") {
        newArray[index].path = newArray[index].path + state.path;
      }
      else {
        newArray[index].path = state.path;
        setAction("add");
      }
    }
    newArray.sort(compareByDate);
    setList(newArray);
    e.preventDefault();
  }

  return (
    <div>
      <InputForm {...{
        date: state.date,
        path: state.path,
        handleDateChange: (e) => handleDateChange(e),
        handlePathChange: (e) => handlePathChange(e),
        handleSubmit: (e) => handleSubmit(e)
      }}></InputForm>
      <List list={list} onDeleteItem={(e) => deleteItem(e)} onEditItem={(e) => editItem(e)}></List>
    </div>
  )
}
/*

*/
export default App
