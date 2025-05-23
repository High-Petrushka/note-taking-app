import { useState } from 'react'
import './App.css'

function App() {

  const [toDoList, setToDoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const [newTask, setNewTask] = useState("");

  function handleInp(e) {
    setNewTask(e.target.value);
  }

  function findTaskIndex(taskId) {
    for (let i = 0; i < toDoList.length; i++) {
      if (toDoList[i].id == taskId) {
        return i;
      }
    }

    return null
  }

  function addTask() {
    let taskId;

    if (toDoList.length == 0) {
      taskId = 0;
    } else {
      taskId = toDoList[toDoList.length - 1].id + 1
    }
    setToDoList([
      ...toDoList,
      { id: taskId, text: newTask },
    ]);

    setNewTask("");
  }

  function delTask(e) {
    const taskId = e.target.value;
    const taskIndex = findTaskIndex(taskId);

    const oldTask = toDoList[taskIndex];

    setDoneList([
      ...doneList,
      oldTask,
    ])

    setToDoList(toDoList.filter((task) => task.id != taskId));
  }

  return (
    <>
      <MainHeader />
      <div className="cont content__card">
        <div className="list__cont">
          <div className="title__box">
            <h3 className="list__title">To Do</h3>
          </div>
          <div className="list__box">
            <TaskList toDoList={JSON.stringify(toDoList)} onClick={delTask} />
          </div>
        </div>
        <div className="list__cont">
          <div className="title__box">
            <h3 className="list__title">Done</h3>
          </div>
          <div className="list__box">
            <ReadyList doneList={JSON.stringify(doneList)} />
          </div>
        </div>
        <div className="action__cont">
          <div className="input__box">
            <AddInp handleInp={handleInp} newTask={newTask} />
          </div>
          <div className="btn__box">
            <AddBtn addTask={addTask} newTask={newTask} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

function MainHeader() {
  return (
    <>
      <div className="cont" style={{
        display: "flex",
        justifyContent: "center",
      }}>
        <h1 className="main__header">Note Taking App</h1>
      </div>

    </>
  )
}

function TaskList({ toDoList, onClick }) {
  return (
    <ul className="item__list">
      {JSON.parse(toDoList).map((task) => (
        <li className='list__item' key={task.id} value={task.id} onClick={onClick}>{task.text}</li>
      ))}
    </ul>
  )
}

function ReadyList({ doneList }) {
  return (
    <ul className='item__list'>
      {JSON.parse(doneList).map((task) => (
        <li className='list__item done__item' key={task.id} value={task.id}>{task.text}</li>
      ))}
    </ul>
  )
}

function AddInp({ handleInp, newTask }) {
  return (
    <>
      <input type="text" placeholder='New task...' value={newTask} onChange={handleInp} />
    </>
  )
}

function AddBtn({ addTask }) {
  return (
    <>
      <button onClick={addTask}>Add Task</button>
    </>
  )
}
