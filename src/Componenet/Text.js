import React,{useState} from 'react';
import './Text.css';
const Text = (props) => {
   const[text,setText]=useState('')

const handelChanger=(event)=>{
    setText(event.target.value)
    
}
const handelClickUp=()=>{
  const newText= text.toUpperCase()
  setText(newText)
}
const handelClickDown=()=>{
  const newText= text.toLocaleLowerCase()
  setText(newText)
}
const handelClickCopy=()=>{
  const newText= document.getElementById('myId');
  newText.select();
 document.execCommand('Copy')
}
const handelSpaceRemove=()=>{
        let newT=text.split(/[ ]+/).join(' ')
        setText(newT)
}
const handelClear=()=>{
        setText('')
}

    return (
        <>
            <div className="container allText" >
                <h1 style={{color:props.mode==='dark'?'white':'black'}}><b>Enter the text to analize below</b></h1>
                <div className= 'text'>
                    
                    <textarea value={text} onChange={handelChanger} style={{backgroundColor:props.mode==='dark'?'#7fbff781':'white',color:props.mode==='light'?'black':'white'}} id='myId'  ></textarea>
                </div>

                <button type="button" onClick={handelClickUp}  className="btn btn-primary mt- ">Uper Case</button>
                <button type="button" onClick={handelClickDown}  className="btn btn-primary mt- ">Lower Case</button>
                <button type="button" onClick={handelClickCopy}  className="btn btn-primary mt- ">Copy Text</button>
                <button type="button" onClick={handelSpaceRemove} className="btn btn-primary mt- ">Space Remove</button>
                <button type="button" onClick={handelClear} className="btn btn-primary mt- ">Clear Text</button>

                <div className={`text-${props.mode==='light'?'dark':'light'}`}>
                    <h2>Word Counter</h2>
                    <p>{text.length>0?text.split(/[ ]\w+/).length:0} Word {text.split(/[a-zA-Z0-9]w*/).length-1} Charecter</p>
                    <p>{text.length>0?0.008*text.split(/[ ]\w+/).length:0} Minite to Read</p>

                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
               
            </div>
        </>
    )
}
export default Text;