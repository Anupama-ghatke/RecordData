import { set , ref } from "firebase/database";
import React,{useState} from "react";
import { firebaseDatabase } from "../../backend/firebaseHandler";
import './RecordData.styles.css';

const RecordData=() => {
    const [studentData,setStudentData] = useState({
        name:"",
        usn:""
    })

    const handlechange =(event) => {
        const {name , value} = event.target;
        setStudentData({
            ...studentData,
            [name]:value
        })
    }

    const handleSave = async()=> {
        const recordRef = ref(firebaseDatabase,`STUDENTS_RECORD/${studentData.usn}`);
        await set(recordRef , studentData);
        alert("data recorded")
        setStudentData({
            name:"",
            usn:""
        })
    }
    return (
        <div className="record-container">
            <div className="input-container">
                <input className="inputs" onChange={handlechange} value={studentData.name} name="name" placeholder="Student Name"/>
                <input className="inputs" onChange={handlechange} value={studentData.usn} name="usn" placeholder="USN"/>
                <button className="container-button" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
export default RecordData;