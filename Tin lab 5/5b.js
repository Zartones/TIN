function student(name, surname, id, grades) {
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.grades=grades;
    
       this.avreageInfo = function(){
        let avg = 0;
        for(i = 0; i < this.grades.length; i++){
            avg += this.grades[i];
        }

       return this.name + ' ' + this.surname + ' '  + ' ' + avg/grades.length;
    }
  }
  let stud = new student('Ben', 'Terek', '6748', [9,6,5,3]);
console.log(stud.avreageInfo());