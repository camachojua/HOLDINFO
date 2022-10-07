import React from 'react'
import './index.css'
import Table from './Table'
function Index() {


    
        // var canvas  = document.getElementById('stopwatch'),
        //     ctx     = canvas.getContext('2d'),
        //     digital = document.getElementById('time'),
        //     reset   = document.getElementById('reset'), 
        //     timerOn = false,
        //     second  = 2 * Math.PI / 60,
        //     start   = 1.5*Math.PI,
        //     t = 0,
        //     animation;
      
        // var draw = function () {
        //   ctx.clearRect(0, 0, canvas.width, canvas.height);
        //   ctx.lineWidth = 30;
        //   ctx.strokeStyle = '#3399cc';
        //   ctx.beginPath();
        //   ctx.arc(100, 100, 80,start, start + second * t);
        //   ctx.stroke();
        //   t = t >= 60 ? 0: t + 0.05; 
        // }
        
        // canvas.addEventListener('click', function () {
        //   if (!timerOn) {
        //     timerOn = true;
        //     animation = setInterval(function () {
        //       draw();
        //       digital.innerHTML = Math.floor(t);
        //     }, 50);
        //   }
        //   else {
        //     timerOn = false;
        //     clearInterval(animation);
        //   }
      
        // });
      

  return (
    <>
    <div className='header'>
        <div>
    <h1 className='heading'>HOLDINFO</h1>
        </div>
        <div className='SELECT'>
  <select>
    <option value="1">INR</option>
  </select>
  <select>
    <option value="1">BTC</option>
    <option value="2">ETH</option>
    <option value="3">USDT</option>
    <option value="4">XRP</option>
    <option value="5">TRX</option>
    <option value="6">DASH</option>
    <option value="7">ZEC</option>
    <option value="8">XEM</option>
    <option value="9">IOST</option>
    <option value="10">WIN</option>
    <option value="11">BTT</option>
    <option value="12">WRX</option>
  </select>
  <button className='btn' value="Buy">BUY</button>
        </div>
        <div className='coll'>
        <div id="time">0</div>
        
        <button className='btn2'> Connect Telegram</button>
       
        <label className="switch">
         <input type="checkbox"/>
         <span className="slider round"></span>
         </label>

        </div>

    </div>
        {/* <Table/> */}
        </>
  )
}

export default Index