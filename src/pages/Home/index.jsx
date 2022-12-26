/*Hooks: They are functions that allow you to connect React state and lifecycle resources from functional components. Hooks usually start with the word use by convention.*/

//Examples of hooks: useState, useEffect.

import React, { useState } from 'react';
import './styles.css'
import { Card } from '../../components/Card';

export function Home() {

  const [studentName, setStudentName] = useState();

  //The state has two elements, the first is the state itself and the second is a function that updates the state.

  //Within the "useState()" function I can also put initial information, such as: "useState('Amanda')".

  const [students, setStudents] = useState([]);

  /*Every time I call the "handleAddStudent()" function, it will call an object that has two properties, the name, stored inside "studentName", and the time, as being the current time. After the assembled object, I will add it in the "setStudents" state*/

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    //Principle of immutability ↓
    setStudents(prevState => [...prevState, newStudent]);

    //"prevState" can be any name, but for better understanding, "prevState" was used.

    //"..." called spread operator.
  }

  return (

    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>Esther</strong>
          <img src="https://github.com/estherferreira.png" alt="Profile picture" />
        </div>
        </header>
      <input
        type="text"
        placeholder='Digite o nome...'
        onChange={e => setStudentName(e.target.value)}
      />
      <button type='button' onClick={handleAddStudent}>
        Enviar
      </button>

      {
        //When we use braces inside the return, it means that we are using the content of the variable, in this case, the content of the "Card".  

        students.map(student => (
          <Card

            /*In a listing, we normally use JavaScript's map() to bring all the data in that list. In React, we need to pass a key property so that this data is never repeated and prevent errors of this type from happening.*/

            //Key Prop ↓ = To prevent the key from repeating itself, the time property value was used.
            key={student.time}
            name={student.name}
            time={student.time}
          />
        ))
      }
    </div>

    //If the property is "number", it can be written like this: "'age="{15}'".
  )
}