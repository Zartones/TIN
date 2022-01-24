class person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    get fullName(){
        return this.name + " " + this.surname ;
    }
    set fullName(name){
        var words = name.split(' ');
        this.name = words[0] || '';
        this.surname = words[1] || '';
    }
}

class student extends person{ 
    constructor(name, surname, id, grades){
        super(name,surname);
        this.id = id;
        this.grades=grades;
    }

    get avgGrade(){
        let gradeAvg = 0;
        for (let i = 0; i < this.grades.length; i++) {
            gradeAvg += this.grades[i];
        }
        return gradeAvg / this.grades.length;
    }
}
let stud = new student('Den','Malak','17',[1,2,3,4]);
console.log(stud.fullName);
console.log(stud.avgGrade);