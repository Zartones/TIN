function student(name, surname, id, grades){
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.grades = grades;

    this.getAverageGrade = () => this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    this.getFullName = () => `${this.name} ${this.surname}`;

    this.setFullName = (name, surname) => {
        this.name = name;
        this.surname = surname;
    };

}

var stud = new student('Den','Malak','17',[4,1,3,]);
console.log(stud.getFullName());
console.log(stud.getAverageGrade());

stud.setFullName('Devid','Jerton');

console.log(stud.getFullName());