import React,{Component} from "react";

class SampleForm extends Component
{
    constructor()
    {
        super()
        this.state={fname:"",output:"",sname:""}
    }
    handleChange=(event)=>{
        const {name,value} = event.target
        this.setState({[name]:value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.setState({output:this.state.fname+this.state.sname})
        
    }
    render()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* input value will be stored in the value attribute and it can be assigned to name attribute */}
                    <input type="text" name="fname" onChange={this.handleChange}/>  
                    <input type="text" name="sname" onChange={this.handleChange}/> 
                    <input type="submit"/>
                </form>
                <h1>{this.state.output}</h1>
            </div>
        )
    }
}

export default SampleForm

