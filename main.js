
//Number
let a=24
document.write(a,"<br>")
document.write(typeof(a),"<br>")

let a1=24.56
document.write(a1,"<br>")
document.write(typeof(a1),"<br>")

//String
let b='skillset'
document.write(b,"<br>")
document.write(typeof(b),"<br>")

let b1="skillset"
document.write(b1,"<br>")
document.write(typeof(b1),"<br>")

let b2='#'
document.write(b2,"<br>")
document.write(typeof(b2),"<br>")

let b3='true'
document.write(b3,"<br>")
document.write(typeof(b3),"<br>")

let b4='a'
document.write(b4,"<br>")
document.write(typeof(b4),"<br>")

let b5="35"
document.write(b5,"<br>")
document.write(typeof(b5),"<br>")

//Boolean
let c=true
document.write(c,"<br>")
document.write(typeof(c),"<br>")

let c1=false
document.write(c1,"<br>")
document.write(typeof(c1),"<br>")

//Undefined
let d
document.write(d,"<br>")
document.write(typeof(d),"<br>")

//null
let e=null
document.write(e,"<br>")
document.write(typeof(e),"<br>")

//BigInt
let f=12345678123456781234567812345678123456712345678
document.write(f,"<br>")
document.write(typeof(f),"<br>") //number

let f1=BigInt(12345678123456781234567812345678123456712345678)
document.write(f1,"<br>")
document.write(typeof(f1),"<br>")

//symbol
let g=Symbol()
console.log(g)
console.log(typeof(g))

//by assigning number literal
let h=10
document.write(h,"<br>")
document.write(typeof(h),"<br>")

//by using number constructor
let h1=Number(20)
document.write(h1,"<br>")
document.write(typeof(h1),"<br>")

let h2=Number('20')
document.write(h2,"<br>")
document.write(typeof(h2),"<br>")

let h3=Number('hii')
document.write(h3,"<br>")
document.write(typeof(h3),"<br>")

//methods of by using constructor

//isNaN()
let h4=isNaN(10)
document.write(h4,"<br>")
document.write(typeof(h4),"<br>")

let h5=isNaN('hii')
document.write(h5,"<br>")
document.write(typeof(h5),"<br>")

//isFinite()
let h6=isFinite(10/2)
document.write(h6,"<br>")
document.write(typeof(h6),"<br>")

let h7=isFinite(10/0)
document.write(h7,"<br>")
document.write(typeof(h7),"<br>")

//Number.isInteger()
let h8=Number.isInteger(9)
document.write(h8,"<br>")
document.write(typeof(h8),"<br>")

let h9=Number.isInteger(9.8)
document.write(h9,"<br>")
document.write(typeof(h9),"<br>")

//parseInt()
let h10=parseInt(9)
document.write(h10,"<br>")
document.write(typeof(h10),"<br>")

let h11=parseInt(8.6)
document.write(h11,"<br>")
document.write(typeof(h11),"<br>")

//parseFloat(_)
let h12=parseFloat(3.7)
document.write(h12,"<br>")
document.write(typeof(h12),"<br>")

let h13=parseFloat(5)
document.write(h13,"<br>")
document.write(typeof(h13),"<br>")


//by using new keyword
let h14=new Number(10)
document.write(h14,"<br>")
document.write(typeof(h14),"<br>")

let h15=new Number(50)
console.log(h15,"<br>")
console.log(typeof(h15),"<br>")