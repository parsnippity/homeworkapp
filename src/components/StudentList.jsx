import Student from "./Student";

const StudentList = ({data}) => {
    return (
        <div className="allStudents">
            {data.map((student) => {
                return (
                    <Student key={student.id} {...student} />
                );
            })}
        </div>
    )
}

export default StudentList;