'use strict';
/*
console.log(this);

const calcage=function(birthyear){
    console.log(2037-birthyear);
    console.log(this);
}
calcage(1991);

const calcagearrow=birthyear=>{
    console.log(2037-birthyear);
    console.log(this);
}
calcagearrow(1980);

const jonnas={
    year:1991,
    calcage:function(){
        console.log(2037-this.year);
    }
}
jonnas.calcage();
//method borrowing
const matila={
    year:2017
}

matila.calcage=jonnas.calcage;
matila.calcage();

const d=jonnas.calcage();

d
*/
//`
/*const jonnas={
    firstname:`jimmy`,
    year:1991,
    calcage:function(){
        console.log(this);
        console.log(2037-this.year);
    },
    greet:()=>console.log(`hey ${this.firstname}`),
};
jonnas.greet();*/

//
/*const jonnas={
    firstname:'jimmy',
    year:1991,
    calcage:function(){
        console.log(this);
        console.log(2037-this.year);
        
        const self=this
        const ismelanial=function(){
            console.log(this);
            //console.log(this.year>=1991 && this.year<=1996);
            console.log(self.year>=1991 && self.year<=1996);
        };
        ismelanial();
    },
    
    
    greet:()=>{
        console.log(this)
        console.log(`hey ${this.firstname}`);
},
};
jonnas.greet();
jonnas.calcage();*/
/*
const jonnas={
    firstname:'jimmy',
    year:1991,
    calcage:function(){
        console.log(this);
        console.log(2037-this.year);
        
        
               const ismelanial=()=>{
            console.log(this);
            console.log(this.year>=1991 && this.year<=1996);
           
        };
        ismelanial();
    },
    
    
    greet:()=>{
        console.log(this)
        console.log(`hey ${this.firstname}`);
},
};
jonnas.greet();
jonnas.calcage();

const addexp=function(a,b){
    console.log(arguments);
return a+b;
}
addexp(2,5);

const addarrow=(a,b)=>{
    console.log(arguments);
return a+b;
}
addarrow(2,5);
*/
/*
let age=30;
let oldage=age;
age=31;
console.log(oldage);
console.log(age);

const me={
    name:'jimmy',
    age:30

}

const friend=me;
friend.age=27;
console.log(`friend:`,friend);
console.log(`me:`,me);
*/

let lastname=`wanjiru`;
let oldlastname=lastname;
lastname=`davies`;
console.log(lastname,oldlastname);

const bro={
    firstname:'mbugua',
    lastname:'wanjiru',
    age:21,

};
const marriedbro=bro;
marriedbro.lastname=`davies`;
console.log(`before marriege:`,bro);
console.log(`after  marriege:`,marriedbro);

//copying objects
const bro2={
    firstname:'mbugua',
    lastname:'wanjiru',
    age:21,
    family:[`alice`,`bob`]

};

const brocopy=Object.assign({},bro2);
brocopy.lastname='jimmy';
console.log(`before marriege`,bro2);
console.log(`after marriege`,brocopy);

brocopy.family.push(`mary`,`john`)






































