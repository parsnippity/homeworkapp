const Student = ({name, age, course}) => {
  return (
    <div className="studentDiv">
        <h3>Name: {name}</h3>
        <h5>Age: {age}</h5>
        <h5>Course: {course}</h5>
    </div>
  )
}

export default Student;