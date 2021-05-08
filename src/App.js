import React from 'react';
import Buttons from './Buttons'

import './App.css';


class App extends React.Component {
  state = {
    result: Number(0),
    ops: '',
    value1: Number(0),
    isFirst: false,
    isOpsRepeat:false
  }
  render() {

    //const {result} = this.state;
    const handleOps = (q) => {
      if(this.state.isOpsRepeat)
      {
        this.setState({
          ops:q
          
        })
      }
      else
      {
        if (this.state.ops === '') {
          if (q === '=') {
            this.setState({
              ops: '',
              value1: 0,
              result: this.state.result
            })
          }
          else {
            this.setState({
              ops: q,
              value1: this.state.result,
              result: 0
            })
          }
  
        }
        else {
  
          const math = eval(`${this.state.value1}${this.state.ops}${this.state.result}`);
          if (q === '=') {
            this.setState({
              ops: '',
              value1: 0,
              result: math
            })
          }
          else {
            this.setState({
              ops: q,
              value1: math,
              result: math,
              isFirst:true,
              isOpsRepeat:true,
            },function(){console.log(`its too good to be ${this.state.isFirst}`)})
          }
        }
      }
    }
    const handleNumber = (q) => {

      if (this.state.ops === '') 
      {
        if (q !== '.') {
          //console.log(q);
          const res = `${this.state.result}` + `${q}`;
          //console.log(res);
          let temp = parseFloat(res);
          temp = `${temp}`
          this.setState({
            result: temp,
          })
          //console.log(this.state.result);
        }
        else {
          const check = `${this.state.result}`;
          if (check.includes(".") === false) {
            console.log(typeof (q))
            const res = `${this.state.result}` + q;

            //const temp = parseFloat(res);

            this.setState({
              result: res
            })
            console.log(this.state.result);
          }
        }


      }
      else {
        console.log(this.state.isFirst)
        if (this.state.isFirst === true) 
        {
          if (q !== '.') {
            console.log(q);
            const res = `${q}`;
            console.log(res);
            let temp = parseFloat(res);
            temp = `${temp}`
            this.setState({
              result: temp,
              isFirst: false,
              isOpsRepeat:false
            })
            console.log(this.state.result);

          }
          else {
            const check = `${this.state.result}`;
            if (check.includes(".") === false) {
              console.log(typeof (q))
              const res = `0${q}`;

              //const temp = parseFloat(res);

              this.setState({
                result: res,
                isFirst: false,
                isOpsRepeat:false
              })
            }
          }
        }
        else {
          if (q !== '.') {
            //console.log(q);
            const res = `${this.state.result}` + `${q}`;
            //console.log(res);
            const temp = parseFloat(res);

            this.setState({
              result: temp,
            })
            //console.log(this.state.result);
          }
          else {
            const check = `${this.state.result}`;
            if (check.includes(".") === false) {
              console.log(typeof (q))
              const res = `${this.state.result}` + q;

              //const temp = parseFloat(res);

              this.setState({
                result: res
              })
              console.log(this.state.result);
            }
          }
        }


      }



    }

    const handleOne = (q) => {

      if (q === 'ac') {
        this.setState({
          result: Number(0),
          ops: '',
          value1: Number(0),
          isFirst: false,
          isOpsRepeat:false

        });
      }
      else if (q === 'pm') {
        this.setState({
          result: this.state.result * (-1)
        });
      }
      else if (q === 'back') {
        let check = `${this.state.result}`;
        if (check.length === 1) {
          this.setState({
            result: 0
          });
        }
        else {
          let temp = `${this.state.result}`;
          temp = temp.substring(0, temp.length - 1);
          temp = parseFloat(temp);
          temp = `${temp}`
          this.setState({
            result: temp
          });
        }

      }
      else if (q === '%') {
        let temp = this.state.result / 100;
        this.setState({
          result: parseFloat(temp)
        });
      }


    }


    return (
      <div style={{flexDirection:'column'}}>
        <section style={{ display:'flex',justifyContent:'end', backgroundColor: 'white', margin: 'auto', width: '25%', border: '3px solid green', blockSize: '60px', textSizeAdjust: 'auto' }} >
          <h2 style={{textDecorationColor:'yellowgreen'}}>{this.state.result}</h2>
        </section>
        
          <Buttons handleNumber={(q) => handleNumber(q)} handleOps={(q) => handleOps(q)} handleOne={(q) => handleOne(q)} />
        
      </div>
    );
  }
}

export default App;
