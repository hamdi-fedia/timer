import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class Test
**/

class Test extends Component {
 state = { 
        value : '',          
        };
valueInput = (event) => {
    this.setState({ 
        value : Number(event.target.value)
    })
}
 convertValue = ()=>{
     let num = this.state.value
     this.setState({       
        heures : Math.floor(num / 3600),
        minutes : Math.floor(num % 3600 / 60),
        secondes : Math.floor(num % 3600 % 60),
       // add 0 if value < 10; Example: 2 => 02
       
     })
 }
 start = () => {
    this.interval = setInterval(() => {
        let s = this.state.secondes;
        if (s === 60){
            this.state.minutes++ 
            this.state.secondes = 0 

        }
        if (this.state.minutes === 60){
            this.state.heures++
            this.state.minutes = 0 
        }

         this.setState({
             secondes : Number(this.state.secondes)+1,   
         })
     },1000);
 }
 reset = () => {
     this.setState({
         num : 0 ,
         heures : 0 ,
         minutes : 0 ,
         secondes : 0 ,
     })
 }
 stop =() => {
     clearInterval(this.interval);
 }
 render() {
  return(
   <div className="fedia">
       <center>
           <h1>Timer</h1>
           <hr></hr>
           <input placeholder="Enter the number..." onChange={this.valueInput}></input>
            <button onClick={this.convertValue}>Convert</button>
           <hr></hr>
           <h1>{this.state.heures} H : {this.state.minutes} M : {this.state.secondes} S </h1>
           <hr></hr>
           <button onClick={this.start}>start</button>
           <button onClick={this.stop}>stop</button>
           <button onClick={this.reset}>reset</button>
       </center>
   </div>
    )
   }
 }



export default Test