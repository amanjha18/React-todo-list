import React, { Component } from 'react';

class Todo extends Component {
    constructor(props){
        super(props)
        this.state={
            item:"",
            todoItems:[]
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addData = this.addData.bind(this);
        this.delete = this.delete.bind(this);
    }
    onChangeHandler(event){
        var inputVal=event.target.value;
        
        this.setState({
            item:inputVal
        })
    }
   
    addData(){
        var inputVal =  this.state.item;
        var itemInstance = this.state.todoItems;
        itemInstance.push(inputVal);
        this.setState({
            todoItems:itemInstance,
            item:""
        })
        console.log(this.state.todoItems)
    }
    delete(event){
        var id = event.target.id;
        var itemInstance = this.state.todoItems;
        itemInstance.splice(id,1)
        this.setState({
            todoItems:itemInstance
            
        })
    }
    render() {
        var itemList = this.state.todoItems.map((e,i)=>
            <li key={i}>{e}<span onClick={this.delete}id={i}> X </span></li>
        )
        return (
            <div>
                <div className="header"></div>
                <div className="body"></div>
                <ul>
                    <li>{itemList}</li>
                </ul>
                <div className="footer">
                    <input type="text" value={this.state.item} onChange={this.onChangeHandler} />
                    <p>{this.state.inputVal}</p>
                    <button onClick={this.addData}>Add</button>
                </div>
            </div>
        )
    }

}

export default Todo 