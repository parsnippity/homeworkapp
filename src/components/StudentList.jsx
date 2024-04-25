import Student from "./Student";
import {useState} from 'react'

const StudentList = ({data}) => {
const [temp, setTemp] = useState(data)
    return (
        <div className="allStudents">
            {temp.map((student) => {
                return (
                    <Student key={student.id} {...student} />
                );
            })}
        </div>
    )
}

export default StudentList;