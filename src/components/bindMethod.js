// 06/09/2022

let info1 = {
    firstName : "Yogiraj",
    lastName : "Bhapkar",
    displayName : function(){
        console.log (this.firstName + " " + this.lastName)
    } 
}

let info2 =  {
    firstName : "Avinash",
    lastName : "Shere", 
}

info1.displayName()


let a= info1.displayName

// implies
// a=function(){
//     console.log (this.firstName + " " + this.lastName)

a.bind(info2)()
//O/P : Avinash Shere

a.call(info2)
//O/P : Avinash Shere