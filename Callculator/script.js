let output = document.getElementById('text')
let valueNumber = document.querySelectorAll('.number')
let deleteAll = document.getElementById('deleteall')
let deleteOne = document.getElementById('delete')
let equal = document.getElementById('equalBtn')

valueNumber.forEach(kami=>{
    kami.addEventListener('click', ()=>{
        // output.value+=kami.value;
        output.value = output.value+kami.value

    })
})

deleteAll.addEventListener('click',()=>{
    output.value = "";
})

deleteOne.addEventListener('click',()=>{

      output.value = output.value.slice(0,-1);
})
  
    
equal.addEventListener('click',()=>{
    output.value = eval(output.value);
})