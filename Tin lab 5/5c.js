var student = { courses: ['TAK','NAI','SKJ','SAD'] };
  
  function createStudent(name, surname, id) {
    let newStudent = Object.create(student);
    newStudent.name = name;
    newStudent.surname = surname;
    newStudent.id = id;
    return newStudent;
}
  
  console.log(createStudent('Den','Malak','17'));
   console.log(createStudent('Den','Malak','17').courses);