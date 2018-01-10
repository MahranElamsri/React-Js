import React from "react";
import ReactDOM from "react-dom";

var Comp=React.createClass({
	getInitialState:function(){
		return{
			todo:["By Flowers","Read Book","Watch TV"]
		}
	},
	render:function(){

		var todos=this.state.todo;
		todos=todos.map(function(item,index){
			return(<TodoItem item={item} key={index}/>)
		});

		return(
				<div>
					<h1>Hobbies:</h1>
					<ul>{todos}</ul>
				</div>

			)
	}
});

var TodoItem=React.createClass({
	render:function(){
		return(
				<div> 
					<li>{this.props.item}</li>
				</div>
			)
	}
})

ReactDOM.render(<Comp/>,document.getElementById('app'));