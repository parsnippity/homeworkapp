import {useState, useEffect} from 'react';
import data from "../data";
import StudentList from "./StudentList"

const College = () => {
    
    const [studentData, setStudentData] = useState(data);
    let addStudent = (e) => {
        e.preventDefault()
        console.log("test");
        let newData = studentData;
        newData.push({id: document.getElementById("id").value, name: document.getElementById("studentName").value, age: document.getElementById("age").value, course: document.getElementById("course").value})
        setStudentData(newData);
        console.log(newData);
        // document.getElementById("test").innerHTML = <StudentList data={studentData}/>
        
    }
  
    useEffect(() => {
        console.log("call useEffect");
        return ()=>{}
    },[])
    return (
        <>
        <form>
            <h1>Add New Student</h1>
            <label htmlFor="studentName">Name:</label>
            <input id="studentName" type="text"></input>
            <label htmlFor="age">Age:</label>
            <input id="age" type="number"></input>
            <label htmlFor="course">Course:</label>
            <input id="course" type="text"></input>
            <label htmlFor="id">Id:</label>
            <input id="id" type="number"></input>
            <button type="submit" onClick={(e)=>addStudent(e)}>Add</button>
        </form>
        <div id="test"><StudentList data={studentData}></StudentList></div>
        </>    
        
    )
}

export default College;