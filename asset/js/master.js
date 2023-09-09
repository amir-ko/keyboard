let _kl = document.querySelectorAll('.key')
let sp = document.getElementsByClassName('key-space')[0]
let ent = document.getElementsByClassName('ent')[0]
let clr = document.getElementsByClassName('clear')[0]
let clk = document.querySelector('.clk')
let tb = document.querySelector('.textbox')
let _kb = document.querySelectorAll('.key-letter')

let flag = 1
let value = ''



for (i = 0; i < _kl.length; i++) {
  _kl[i].addEventListener("click",  (e)=> {
    tb.value += e.target.innerText    
  })
}
sp.addEventListener("click",  ()=> {
  tb.value += " "
})


clr.addEventListener('click', () => {
  let _cre = tb.value.substring(0, (tb.value.length) - 1)
  tb.value= _cre  
})

ent.addEventListener('click', () => {
  tb.value = tb.value + '\n'
})

clk.addEventListener('click', (e) => {
  if (flag % 2) {
    for (i = 0; i < _kb.length; i++) {
      clk = _kb[i].getAttribute('data-up')      
      e.target.classList.add('bi-arrow-up-circle-fill')
      e.target.classList.remove('bi-arrow-up-circle')
      _kb[i].innerText = ''
      _kb[i].innerText = clk
    }

  }
  else {
    for (i = 0; i < _kb.length; i++){
      _lowercase = _kb[i].getAttribute('data-l')        
      e.target.classList.add('bi-arrow-up-circle')
      e.target.classList.remove('bi-arrow-up-circle-fill')
      _kb[i].innerText = ''
      _kb[i].innerText = _lowercase
    }  
  }
  flag++
})
