import React,{ useState } from 'react';

export default function TextForm(props) {
    const [text, setText]= useState('Enter the text here');
    function handleUpperCase() {
        console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to upper case","success");

    }
    function handleLowerCase() {
      console.log(text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Changed to lowercase","success");
  }
  function Clear() {
    console.log(text);
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared","success");

}
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
    function onChange(event) {
        setText(event.target.value);
    }
  return (
    <>
   <div className= "container my-2" style={{color:props.mode === 'light'?'black':'white'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'black':'white'}} onChange={onChange} id="myBox" rows="10"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleUpperCase}>Convert to Upper Case</button>
        <button disabled={text.length === 0}  className="btn btn-primary" onClick={handleLowerCase}>Convert to Lower Case</button>
        <button disabled={text.length === 0}  className="btn btn-primary mx-2" onClick={Clear}>Clear Text</button>
        <button disabled={text.length === 0}  type="submit" onClick={speak} className="btn btn-primary">Speak</button>
    </div>
    <div className="container" style={{color:props.mode === 'light'?'black':'white'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
      <p>Approx. {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length }minutes required to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
