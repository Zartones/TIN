class student{ 
    constructor(name, surname, id, grades){
         this.name = name;
         this.surname = surname;
         this.id = id;
         this.grades=grades;
    }
    get fullName(){
        return this.name + " " + this.surname ;
    }
    set fullName(name){
        var words = name.split(' ');
        this.name = words[0] || '';
        this.surname = words[1] || '';
    }
    get average(){
        let average = 0;
        for (let i = 0; i < this.grades.length; i++) {
            average += this.grades[i];
        }
        return average / this.grades.length;
    }
}
let stud = new student('Den','Malak','17',[4,8,2,3,1]);
console.log(stud.fullName);
console.log(stud.avgGrade);