import {React,useState} from 'react'

function TextForm(props) {

const [text,setText] = useState('')

function handleClickUpper() {
    setText(text.toUpperCase())
}

function handleClickLower() {
  setText(text.toLowerCase())
}

function handleClickFirstWordUpper() {
  setText(
    text.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ')
    )
}

function textBoxFun(e) {
  setText(e.target.value)
}



  return (

<>
<div className='container'>
<h1>{props.Heading}</h1>
<div className="m-3 mx-auto">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.textField}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text}
   onChange={textBoxFun} ></textarea>
</div>
<button className='btn btn-primary ' onClick={handleClickUpper} >Convert to UpperCase</button>
<button className='btn btn-primary mx-1' onClick={handleClickLower} >Convert to UpperCase</button>
<button className='btn btn-primary mx-1' onClick={handleClickFirstWordUpper} >Convert First Word UpperCase</button>
</div>

<div className="container my-3">
  <h2>Counter</h2>
  {/* <p >words: {text.split(' ').length}</p> */}
  {/* <p >words: {text.trim() === "" ? 0 : text.trim().split(' ').length}</p> */}
  <p >words: {text.split(' ').length-1}</p>
  <p>character: {text.length}</p>
  <p>{0.008*text.split(' ').length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text?text:"Nothing to preview!!"}</p>
  <p ></p>
</div>
</>    
  )
}

export default TextForm