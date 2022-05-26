import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { firebaseDatabase } from "../../backend/firebaseHandler";
import './RecordList.styles.css'

const RecordList = () => {

    const [Studentlist , setStudentlist] = useState([]);

    useEffect( () => {

        const fetchData = async () => {
            const studentRef = ref(firebaseDatabase , `STUDENTS_RECORD`);
            onValue(studentRef, (DataSnapshot) => {
                if (DataSnapshot.exists()) {
                    const tempVal = DataSnapshot.val();
                    console.log(Object.values(tempVal));
                    
                    const temp =[]
                    for (const key in DataSnapshot.val()) {
                        const student = DataSnapshot.child(key).val();
                        temp.push(student);
                    }
                    setStudentlist(temp);
                }
                else {
                    alert("No records found")
                }
            })
        }

        fetchData()
    }, []);

    console.log(Studentlist);

    return(
        <div>
            <h1>List of Student</h1>
            <div className="grid-list">
            {
                Studentlist.map((item) => {
                    return (
                        <div className="grid-content">
                            <h3>{item.name}</h3>
                            <p>{item.usn}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default RecordList;