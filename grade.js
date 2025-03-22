let name=document.getElementById('name');
let english=document.getElementById('english');
let math=document.getElementById('math')
let submit= document.getElementById('submit')

submit.addEventListener('click',function(e) {
    e.preventDefault()
   
    if (!name.value &&!math.value &&!english.value) {
        alert('enter valid details')
    }
    if (math.value >=50 && english.value >=50 ) {
        alert(name.value +' '+'you are eligible for admission at university of ibadan and university of lagos')
        setTimeout(() => {
            location.href="welcome.html"
        }, 1000);
        
    }else if (math.value>=50 || english.value >=50) {
        alert(name.value +" "+"your are eligible for admission at university of lagos")
        setTimeout(() => {
            location.href="welcome.html"
        }, 1000);
    }else{
        alert( name.value +' '+'you are not eligible for admission')
        setTimeout(() => {
            location.href="not.html"
        }, 1000);
    }
   
    
})
function switchMode() {
    let mode=document.body
    mode.classList.toggle("dark")
    
}