import React,{Component} from 'react'

class BodyFatForm extends Component{
    constructor(props){
        super(props)
        this.state = {age: null, skinfold: null, value: null}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        const {age, skinfold, value} = this.state
        event.preventDefault()
        alert(
            "Body Density: "+ Number.parseFloat(1.10938 - (0.0008267 * this.state.skinfold ) + (0.0000016 * (this.state.skinfold*this.state.skinfold)) - (0.0002574 * this.state.age),100)
         +"\n Body Fat: % "+Number.parseFloat((495 / this.result()) - 450)
         +"\n"+this.state.value
        )
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    updateV = e => this.setState({ value: +e.target.value });

    male = () =>  Number.parseFloat(1.10938 - (0.0008267 * Number.parseFloat(this.state.skinfold) ) + (0.0000016 * (this.state.skinfold*2)) - (0.0002574 * this.state.age),100);
    bodyFatPercentMale = () => Number.parseFloat((495 / this.male()) - 450);

    female = () =>  Number.parseFloat(1.0994921 - (0.0009929 * Number.parseFloat(this.state.skinfold) ) + (0.0000023 * (this.state.skinfold*2)) - (0.0001392 * this.state.age),100);
    bodyFatPercentFemale = () => Number.parseFloat((495 / this.female()) - 450);

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                    Select Sex:
          <br/>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value={this.male()}>Male</option>
            <option value={this.female()}>Female</option>
            
           
          </select> 
                    </label>
                </div>
                <div>
                <label htmlFor='age'>Age</label>
          <input
            name='age' 
            placeholder='Age'
            value={this.state.age}
            onChange={this.handleChange}
          />
                </div>
                <div>
          <label htmlFor='skinfold'>Skinfold</label>
          <input
            name='skinfold' 
            placeholder='skinfold'
            value= {this.state.skinfold}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button>Calculate Body Fat Percentage</button>
        </div>
        
            
        Body Density Male: {this.male()}
        <br/>
        Body Fat Percentage Male: {this.bodyFatPercentMale()}
        <br/>
        Body Density Female: {this.female()}
        <br/>
        Body Fat Percentage Female: {this.bodyFatPercentFemale()}
        <br/>
       
        
        Value: {this.state.value}
            </form>
        )
    }
}

export default BodyFatForm 