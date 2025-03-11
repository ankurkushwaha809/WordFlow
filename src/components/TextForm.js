import {React,useState} from 'react'

function TextForm(props) {

const [text,setText] = useState('')

// function textBoxFun(e) {
//   setText(e.target.value)
// }

function handleClickUpper() {
    setText(text.toUpperCase())
    props.showAlerts("success","Upper Case")

}

function handleClickLower() {
  setText(text.toLowerCase())
  props.showAlerts("success","Lower Case")

}

function handleClickFirstWordUpper() {
  setText(
    text.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ')
    )
    props.showAlerts("success","First character of word is Capital")

}

function encodeFun() {
  setText(btoa(text))
  props.showAlerts("success","Encoded Text")

}

function clearFun() {
  setText('')
  props.showAlerts("success","Clear")

}

function extractNumFun() {
  // let number = text.split('').filter(chare => !isNaN(chare) && chare !== ' ').join('')
let number="";
for (let i = 0; i < text.length; i++) {
  if (!isNaN(text[i]) && text[i] !== ' ') {
    number= number+text[i]
  }  
}
  setText(number)
  props.showAlerts("success","Extract All Number")

}

function extractCharFun() {
  // let number = text.split('').filter(chare => !isNaN(chare) && chare !== ' ').join('')
let number="";
for (let i = 0; i < text.length; i++) {
  if (isNaN(text[i])) {
    number= number+text[i]
  }  
}
  setText(number)
  props.showAlerts("success","Extract All Character")

}

function speakFun() {
  var msg = new SpeechSynthesisUtterance();
msg.text = text
window.speechSynthesis.speak(msg);
props.showAlerts("success","now i am start speaking")

}

function listenFun() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.continuous = true; // Keeps listening
  
  recognition.onresult = (event) => {
    let transcript = event.results[event.results.length - 1][0].transcript;
    console.log("Recognized Speech:", transcript);
    
    // Append the new text instead of replacing
    setText(prevText => prevText + " " + transcript);
  };

  recognition.start(); // Start listening
  props.showAlerts("success","speak Now")

}

function extraSpaceFun() {
// let res = text.split(" ").join("");
let res = text.replaceAll(" ","")
setText(res)

props.showAlerts("success","remove extra space")

}


function reverseFun() {
const ans = text.split('').reverse().join('');
setText(ans)

props.showAlerts("success","reverse")

}


  return (

<>
<div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
<h1>{props.Heading}</h1>
<div className="m-3 mx-auto">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.textField}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} value={text}
   onChange={(e)=>{ setText(e.target.value)}} ></textarea>
</div>
<button className='btn btn-primary ' onClick={handleClickUpper} >Convert to UpperCase</button>
<button className='btn btn-primary mx-1' onClick={handleClickLower} >Convert to UpperCase</button>
<button className='btn btn-primary mx-1' onClick={handleClickFirstWordUpper} >Convert First Word UpperCase</button>
<button className='btn btn-primary mx-1' onClick={encodeFun} >Encode to Base64</button>
<button className='btn btn-primary mx-1' onClick={clearFun} >Clear</button>
<button className='btn btn-primary mx-1' onClick={extractNumFun} >Extract Number</button>
<button className='btn btn-primary mx-1' onClick={extractCharFun} >Extract character</button>
<button className='btn btn-primary mx-1' onClick={speakFun} >Speak</button>
<button className='btn btn-primary mx-1' onClick={listenFun} >Mic</button>
<button className='btn btn-primary mx-1 my-2' onClick={extraSpaceFun} >Remove Extra Space</button>
<button className='btn btn-primary mx-1 my-2' onClick={reverseFun} >reverse</button>
</div>

<div className={`container my-3 text-${props.mode==='dark'?'light':'dark'} `}>
  <h2>Counter</h2>
  {/* <p >words: {text.split(' ').length}</p> */}
  {/* <p >words: {text.trim() === "" ? 0 : text.trim().split(' ').length}</p> */}
  <p>Words: {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}</p>
  <p>character: {text.trim() === "" ? 0 : text.trim().length}</p>
  {/* <p>{0.008*text.split(' ').length} Minutes read</p> */}
  <h2>Preview</h2>
  <p>{text?text:"Nothing to preview!!"}</p>
  <p ></p>
</div>
</>    
  )
}

export default TextForm