var person={ 
    name:"jay",
    age:21,
    balance:200.2,
    dob:new Date(1998,0,24).toJSON(),
    address:{
        city:"bareilly",
        postCode:243203
    }

};
console.log(person);
console.log(person.name);
console.log(person.address.city);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(JSON.stringify(person));
console.log(person.balance);


