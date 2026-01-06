'use strict';

const start= document.querySelector('.btn-start')
const reset= document.querySelector('.btn-reset')
const display=document.querySelector('.display-text')

const pause_html=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  class="icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>`
const start_html=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  class="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>`

let isRunning=false;
let fwd_time=null;
let i=0;
let s=0,m=0,h=0;
let timeString=''
    


reset.addEventListener('click',()=>{
    if (fwd_time !==null){
        clearInterval(fwd_time)
        fwd_time=null
        start.innerHTML= start_html
    }
    display.textContent='00:00:00.00'
    i=0;
    s=0,m=0,h=0;
    isRunning=false;
})

// state 1: start 
//state 2: pause  toggle


start.addEventListener('click',()=>{
        if (!isRunning){
            start.innerHTML= pause_html;
            fwd_time= setInterval(()=>{
                i++;

                if(i===10){
                    ++s;
                    i=0
                }
                if(s===60){

                    m++;
                    s=0
                }
                if(m===60){
                    h++
                    m=0
                }
                timeString=`${String(h).padStart(2,0)}:${String(m).padStart(2,0)}:${String(s).padStart(2,0)}.${String(i).padStart(2,0)}`
                display.textContent=timeString
                // return [timeString]
            
            },100);
        }
        else{
            // getTimeString=display.textContent;
            
            start.innerHTML= start_html;
            clearInterval(fwd_time)
            fwd_time=null
        }
        isRunning=!isRunning
})