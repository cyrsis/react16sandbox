let uility = {

     password: () => Math.random().toString(36).slice(2),
     today: () => new Date().toDateString(),


}


let {password, today} = Object.create(uility) ;

console.log(password())
console.log(today())