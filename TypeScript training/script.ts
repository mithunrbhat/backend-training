/*
let mystr: string;
let mynum: number;
let anyvar: any;
let boolvar: boolean;

let strarr: Array<string>;
let anyarr: [string, number];


mystr = 'hello'+' '+'world';
mynum = 1.1;
anyvar = 'tru';
boolvar = true;

strarr = ['hello', 'world'];
anyarr = ['mallo', 1];
console.log(mystr, mynum, anyvar, boolvar, strarr, anyarr);*/

/*function add(n1:string, n2?:string):string {
    return n1 +' '+ n2;
}

console.log( add('true'));*/

/*interface TODO{
    title: string,
    kills: number
}

function todo(todo: TODO) {
    return todo.title+" killed "+todo.kills+" goblins "
}

let todolst = {
    title: 'valkyri',
    kills: 25
}

console.log(todo(todolst));*/

// interface userInt{
//     name:string;
//     mail:string;
//     age:number;
//     displayUser();
// }

// class User implements userInt{
//     name:string;
//     mail:string;
//     age:number;

//     constructor(name:string, mail:string, age:number) {
//         this.name = name;
//         this.mail = mail;
//         this.age = age;
//     }
//     displayUser(){
//         console.log(this.mail+' mailId belonges to '+this.name+' whose '+this.age+' years old');
//     }
// }
// let user = new User('mithun', 'mbhat@co.in', 22);
// user.displayUser();

// ----------

// class specialUsr extends User{
//     id: number;

//     constructor(id:number, name:string, mail:string, age:number){
//         super(name, mail, age);
//         this.id = id;
//     }
//     displaySpUser(){
//         // super.displayUser();
//         console.log(this.id, this.name, this.mail, this.age);
//     }
// }

// let spUser = new specialUsr(1,'mithunr', 'mbhat@co.in', 12);
// spUser.displaySpUser();
// spUser.displayUser();*/

// interface my {
//     name: string;
//     age: number;
// }

/*let mit = {} as my;
mit.name = 'mit';
mit.age = 21;*/

/*let x: (y:number, z:number)=> number = function(y:number, z:number):number{
    return y+z;
}

console.log(x(2,3));*/

/*function fullname(firstname: string, lastname: string = 'bat'): string {
    return firstname+' '+lastname
}
let fulame = fullname('mit');*/

/*function reverse(...rest: string[]): string{
    return rest.join('_');
};

let reversal: (...somthing: string[]) => string = reverse;

console.log(reverse('mithun', 'r', 'bhat'));*/
/*enum propose {
    no = 'die',
    yes = 'coma',
    maybe = 'someone',
    definetly = 'cheat'
}

function willU(name: string, answer: propose): void {
    console.log(`${name} said ${answer}`);
}

willU('hanna', propose.maybe);*/

/*function identity<T>(arg: T): T{
    return arg;
}

console.log(identity(21));*/
/*
interface breet {
    (str: string): string;
}

function greet(str: string): string{
    return `Hello ${str}`;
}

let greeting: breet = greet;
console.log(greeting('btch'));*/

/*interface inter<M> {
    (arg: M): M;
}

function identity<M>(arg: M): M{
    return arg;
}

let num: inter<number> = identity;
let str: inter<string> = identity;

console.log(num(21), str('by'), num(36));*/




