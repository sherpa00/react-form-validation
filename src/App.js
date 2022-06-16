import { useState } from "react";
import Form from "./components/Form";
import FormSuccess from "./components/FormSuccess";
import bg from "./components/r_bg.jpg"

function App(props) {

  const [submitted,setSubmitted] = useState(false);

  const handleSubmitted = () => {
    setSubmitted(true);
    console.log("OKY")
  }

  return (
    <div className="container">
      <div className="right_bg">
        <img src={bg} alt=""/>
      </div>
      {
        !submitted ? <Form submitForm={handleSubmitted} />
        : <FormSuccess />
      }  
    </div>
  )
}

export default App;
