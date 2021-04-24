import React from "react"
import './App.css'

class CalculatorNew extends React.Component{
    constructor(props){
    super(props)
    this.state={
        disable:true,
        input:'',
        first:0,
        result:0,
        second:0  ,
        operator:null 
    }
    this.clickHandler=this.clickHandler.bind(this)
    this.clickOperation=this.clickOperation.bind(this)
    this.clearHandler=this.clearHandler.bind(this)
    this.backspaceHandler=this.backspaceHandler.bind(this)
    this.showResult=this.showResult.bind(this)
    }

    backspaceHandler(){
        this.setState({
            input:this.state.input.slice(0,-1)
        })

    }
    clearHandler(){
        this.setState({
        input:''
        })
    }
    
    
    clickHandler(value){
        const{input}=this.state
        this.setState({
        input:input+value
        })
    }

    clickOperation(operator){
        this.setState({
        operator
        })
        
    }

    showResult(){
        this.setState({
            result:eval(this.state.input)
        })

    }


    render(){
    return(
    <>
    <h1>Calculator</h1>
    <div><input type ="text" value={this.state.input} /></div>
    <br/>
    <div >
    <div>
    <input type="button" value="5" onClick={()=>this.clickHandler(5)}/>
    <input type="button" value="6" onClick={()=>this.clickHandler(6)}/>
    <input type="button" value="7" onClick={()=>this.clickHandler(7)}/>
    <input type="button" value="8" onClick={()=>this.clickHandler(8)}/>
    <input type="button" value="9" onClick={()=>this.clickHandler(9)}/>
    </div>
    </div>
    <div>
    <input type="button" value="0" onClick={()=>this.clickHandler(0)}/>
    <input type="button" value="1" onClick={()=>this.clickHandler(1)}/>
    <input type="button" value="2" onClick={()=>this.clickHandler(2)}/>
    <input type="button" value="3" onClick={()=>this.clickHandler(3)}/>
    <input type="button" value="4" onClick={()=>this.clickHandler(4)}/>
    </div>
     <div className="r">
    <input type="button" value="+" onClick={()=>this.clickHandler('+')}/>
    <input type="button" value="-" onClick={()=>this.clickHandler('-')}/>
    <input type="button" value="/" onClick={()=>this.clickHandler('/')}/>
    <input type="button" value="*" onClick={()=>this.clickHandler('*')}/>
    <input type="button" value="clear" onClick={this.clearHandler}/>
    <input type="button" value="backspace" onClick={this.backspaceHandler}/>

    </div>
    <div>
    <input style={{"marginLeft":"100px"}} type="button" value="=" onClick={this.showResult}/>
    </div>
    <br />
    <div>
    RESULT:{this.state.result}
    </div>

    </>
    )
    }
    }
    export default CalculatorNew
