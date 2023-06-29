
let kids = document.querySelector('#answ')
let op_one = document.querySelector('#op1')
let oper = document.querySelector('#oper')
let op_two = document.querySelector('#op2')
let btn = document.querySelector('#btn')
let keys = document.querySelectorAll('.keyboard-element')
keys.forEach((el, i)=>{
    el.addEventListener('click', (e)=>{
        kids.value += i
        console.log();
    })
})
let op1 = [
]
let op2 = [
]
let operations = [
    '+',
    '-'
]
for(let index = 0; index < 10; index++) {
    op1.push(index)
    op2.push(index)
}
let q;
function question(){
    op_one.innerHTML = op1[Math.round(Math.random()*9)]
    oper.innerHTML = operations[Math.round(Math.random())]
    op_two.innerHTML = op2[Math.round(Math.random()*9)]
    q = eval(op_one.innerHTML + oper.innerHTML  + op_two.innerHTML)
}
function clearkids(){
    kids.value = ""
}
function kidsOne(){
    let a = kids.value.split('')
    a.pop()
    kids.value = a.join('')
}
question()

btn.addEventListener('click', ()=>{
    if(Number(kids.value) == q){
        console.log('yes')
        kids.value = ""
        question()
    } else {
        alert('no')
    }
})

