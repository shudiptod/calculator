import React from 'react'
import './App.css'

const Buttons = ({handleNumber,handleOne,handleOps}) => {



    //const {res} = this.state;
    const handleDigit=(q)=>{
        handleNumber(q);
    }
    const handleSpecial= (q)=>{
        handleOne(q);
    }

    return (
        <div style={{flex:'column', flexDirection:'column'}}>
            <div>
                <section>
                    <button onClick={(e)=>handleSpecial("ac")} value="ac" >AC</button>
                    <button onClick={()=>handleSpecial("pm")} value="pm">+/-</button>
                    <button onClick={()=>handleSpecial("%")} value="%" >%</button>
                    <button onClick={()=>handleSpecial("back")} value="back">Remove </button>
                </section>
            </div>
            <div>
                <section>
                    <button onClick={(e)=>handleOps(e.target.value)} value="+">+</button>
                    <button onClick={(e)=>handleOps(e.target.value)} value="-">-</button>
                    <button onClick={(e)=>handleOps(e.target.value)} value="*">*</button>
                    <button onClick={(e)=>handleOps(e.target.value)} value="/">/</button>
                </section>
            </div>
            <div>
                <section>
                    <button onClick={(e)=>handleDigit(e.target.value)} value="1">1</button>
                    <button onClick={(e)=>handleDigit(e.target.value)} value="2">2</button>
                    <button onClick={(e)=>handleDigit(e.target.value)} value="3" >3</button>
                </section>
            </div>
            <div>
                <section>
                    <button onClick={(e)=>handleDigit(e.target.value)} value="4">4</button>
                    <button onClick={(e)=>handleDigit(e.target.value)} value="5">5</button>
                    <button onClick={(e)=>handleDigit(e.target.value)} value="6">6</button>
                </section>
            </div>
            <div>
                <section>
                    <button onClick={(e)=>handleDigit(e.target.value)} value="7">7</button>
                    <button onClick={(e)=>handleDigit(e.target.value)} value="8">8</button>
                    <button onClick={(e)=>handleDigit(e.target.value)} value="9">9</button>
                </section>
            </div>
            <div>
                <section>
                    <button onClick={(e)=>handleDigit(e.target.value)} value="0">0</button>
                    <button onClick={(e)=>handleDigit(e.target.value)} value=".">.</button>
                    <button onClick={(e)=>handleOps(e.target.value)} value="=">=</button>
                    </section>

            </div>
        </div>
    )
}

export default Buttons
