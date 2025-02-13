import { useState } from "react";
import InputForm from "./components/InputForm/InputForm"
import List from "./components/List/List"
import { TrainingData } from "./types";
import "./utils"
import { compareByDate } from "./utils";

function App() {

  let a: TrainingData = { date: '', path: 0 }
  let b: TrainingData[] = [];
  const [state, setState] = useState({
    trainingData: a,
    list: b
  });

  function submit(newData: TrainingData) {
    let newArray = [];
    for (let i = 0; i < state.list.length; i++) {
      newArray.push(state.list[i]);
    }
    let index: number = newArray.findIndex(item => item.date === newData.date);

    if (index === -1) {
      newArray.push(newData);
    }
    else {
      newArray[index].path = newArray[index].path + newData.path;
    }
    newArray.sort(compareByDate);

    setState({ trainingData: newData, list: newArray });
  }

  function deleteItem(newData: TrainingData) {
    console.log(newData);
    let newArray = [];
    for (let i = 0; i < state.list.length; i++) {
      newArray.push(state.list[i]);
    }

    let rem = newArray.findIndex(newArray => newArray.date === newData.date);
    if (rem !== -1) {
      newArray.splice(rem, 1);
    }

    setState({ trainingData: newData, list: newArray });
  }

  function editItem(newData: TrainingData) {
    setState({ trainingData: newData, list: state.list });
    console.log(state.trainingData.date);
  }

  return (
    <div>
      <InputForm dataProp={state.trainingData} onOk={(e) => submit(e)}></InputForm>
      <List list={state.list} onDeleteItem={(e) => deleteItem(e)} onEditItem={(e) => {
        editItem(e);
      }}></List>
    </div>
  )
}
export default App
