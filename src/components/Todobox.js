import { useState } from "react";

function Todobox() {
    function TaskGenerate(){
        return {
            task: '',
        }
    }
    
    const tasks = [];
    const [tasksArr, setTasksArr] = useState(tasks);
    const [task, setTask] = useState(TaskGenerate);
    const [inptVal, setInptVal] = useState('');
    
    console.log(tasksArr)
    
    const res = tasksArr.map((task, index)=>{
        return <li key={index} className="todoBox__tasksList-item">
            <p>{task.task}</p>
            <button className="todoBox__addBtn" onClick={()=>deleteTask(index)}>delete</button>
        </li>
    });
    
    
    let tasksCount;
    tasksArr.length !== 0 ? tasksCount = <p>Total count of tasks: {tasksArr.length}</p> : tasksCount = <p>Total count of tasks: 0</p>;
    
    
    
    function addTaskValue(prop, e){
        setTask({...task, [prop]: e.target.value })
    }
    
    
    
    function addTask(){
        if(inptVal === ''){
            return null
        }else{
            setTasksArr([...tasksArr, task]);
            setInptVal('')
        }
    }
    
    
    
    function deleteTask(index){
        setTasksArr([...tasksArr.slice(0, index), ...tasksArr.slice(index + 1)])
    }
    
    
    return (
        <section className="todoBox">
           <div className="todoBox__container">
                <h2 className="todoBox__title">To Do:</h2>
                <h2 className="todoBox__tasksCount">{tasksCount}</h2>
                <input placeholder="What you need to do?" value={inptVal} className="todoBox__input"  onChange={e=> {addTaskValue('task', e); setInptVal(e.target.value)}} />
                <button className="todoBox__addBtn" onClick={()=>addTask()}>add</button>
                <ul className="todoBox__tasksList">{res}</ul>
            </div>
        </section>
    )
}

export default Todobox;