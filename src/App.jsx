import { useState } from 'react'
import './App.css'

function App() {

  const [toDoList, setToDoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  return (
    <>
      <MainHeader />
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
      <div className="cont content__card">
        <div className="list__cont">
          <div className="title__box">
            <h3 className="list__title">To Do</h3>
          </div>
          <div className="list__box">
            <TaskList />
          </div>
        </div>
        <div className="list__cont">
          <div className="title__box">
            <h3 className="list__title">Done</h3>
          </div>
          <div className="list__box">
            <ReadyList />
          </div>
        </div>
        <div className="action__cont">
          <div className="input__box">
            <AddInp />
          </div>
          <div className="btn__box">
            <AddBtn />
          </div>
        </div>
      </div>
    </>
  )
}

function TaskList() {
  return (
    <></>
  )
}

function ReadyList() {
  return (
    <></>
  )
}

function AddInp() {
  return (
    <>
      <input type="text" placeholder='New task...' />
    </>
  )
}

function AddBtn() {
  return (
    <>
      <button>Add Task</button>
    </>
  )
}
