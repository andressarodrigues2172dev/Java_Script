alert('Tudo certo')

let objecto = { string:'string', Number: 1 ,Boolean:true , array:['array'], Objectinterno:{objectointerno:'objeto interno'}}

console.log(objecto.Number)

var string = objecto.string

console.log(string)

var { string , Number , array} = objecto;
console.log(string , Number , array)