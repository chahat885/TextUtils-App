// import React from 'react'
import react,{ useState } from 'react'





export default function About(props) {
//     const [mystyle,setmystyle]=useState({
//     color:'black',
//     backgroundColor:'white'
// }
// );

let mystyle={
  color:props.mode=='dark'?'white':'black',
  backgroundColor:props.mode=='dark'?'rgb(7, 56, 97)':'white'
}





  return (
    <div className='container' >
        <h2 className='my-3' style={{color:props.mode=='dark'?'white':'black'}} > About Us</h2>
      
     <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong> Analyze Your text</strong>
      </button>
    </h2>
    <div id="collapseOne" style={mystyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count .
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
<strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" style={mystyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" style={mystyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>
 

    </div>
  )
}
