var person ={
    name : "Dan", 
    surname : "Romerto" ,
    id : 1,
    
     nameSurname: function(){
         console.log(this.name +' ' + this.surname);
 
},
    personId : function(){
       console.log(this.id);
    } 

   };

   function objectInfo(object) {
    for (var property in object) {
        console.log(typeof (property) + ": " + property);
    }
}
  

person.nameSurname();
person.personId();

printObjectInformation(person);