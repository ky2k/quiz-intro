let h=0
let m=0
let s=0
class Gros{
  static on(){
    let state=document.querySelector('.switch')
    let on=document.querySelector(".btn_switch")
      state.classList.forEach((item)=>{
        if('s_on'==item){
          state.classList.add("s_off")
          state.classList.add("b_off")
          state.classList.remove("b_on")
          state.classList.remove("s_on")
          on.classList.add("b_on")
          on.classList.remove("b_off")
          console.log('off');
        }else if('s_off'==item){
          state.classList.add("s_on")
          state.classList.add("b_on")
          state.classList.remove("b_off")
          state.classList.remove("s_off") 
          on.classList.add("b_off")
          on.classList.remove("b_on")
          console.log('on');
        }
      })
  }
  static setTime(){
    let up=document.querySelector('#up_clk')
    let down=document.querySelector('#d_clk')
    let hh=document.querySelector('#h')
    let mm=document.querySelector('#m')
    let ss=document.querySelector('#s')
    up.addEventListener('click',()=>{
      if (s<60){
        s=s+1
        console.log(s);
        ss.innerHTML=s
        console.log(s);
      }else if(m<60){
        s=0
        m=m+1
        mm.innerHTML=m
        console.log(m);
      }else if(h<12){
        s=0
        m=0
        h=h+1
        hh.innerHTML=h
        console.log(h);
      }
      down.addEventListener("click",()=>{
        if (s>0){
          console.log('0>');
        }
      })
    })
  }
}
Gros.setTime()