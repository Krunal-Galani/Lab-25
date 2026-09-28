// import React from 'react'
import { useState } from 'react';

function Crud() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" }
  ]);

  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  // CREATE / UPDATE
  const saveStudent = () => {
    if (name === "") {
      return;
    }

    if (editId === null) {
      // CREATE
      const newStudent = {
        id: Date.now(),
        name: name
      };

      setStudents([...students, newStudent]);
    } 
    else {
      // UPDATE
      const updatedStudents = students.map((student) =>
        student.id === editId
          ? { ...student, name: name }
          : student
      );

      setStudents(updatedStudents);
      setEditId(null);
    }

    setName("");
  };

  // DELETE
  const deleteStudent = (id) => {
    const filteredStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(filteredStudents);
  };

  // EDIT
  const editStudent = (student) => {
    setName(student.name);
    setEditId(student.id);
  };

  return (
    <div>
      <h1>Student CRUD</h1>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={saveStudent}>
        {editId === null ? "Add Student" : "Update Student"}
      </button>
      <h2>Student List</h2>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}

            <button onClick={() => editStudent(student)}>
              Edit
            </button>

            <button onClick={() => deleteStudent(student.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud