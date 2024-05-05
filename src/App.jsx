import { useState } from "react";

function App() {
  const numberArrey = [1, 2, 3];
  const messageArrey=["learn react 😍" , "make projects 😎" ,  "get a job 🎉"]
const [step , setStep] = useState(1)

  return (
    <>
      <div className="steps">
        <div className="numbers">
          {numberArrey.map((number, key) => (
            <>
              <div className= {step>=number?"active":""} key={key} >
                step{number}
              </div>
            </>
          ))}
        </div>
        <h1 className="message">step {step} : {messageArrey[step-1]}</h1>

        <div className="buttons">
          <button>
            <span onClick={()=>{
             if(step>1)setStep(step-1)
              console.log(step)

            }}>previous</span>
          </button>
          <button onClick={()=>{
            if(step<3)setStep(step+1)
              console.log(step)
          }}>
            <span>next</span>
          </button>
        </div>
        <p className="close" onClick={()=>setStep(1)}>&times;</p>
      </div>
    </>
  ); 
}

export default App;
