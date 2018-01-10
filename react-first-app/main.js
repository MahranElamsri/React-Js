
import React from "react";
import ReactDOM from "react-dom";
import TodoItem from './todoItem'
import Add from './addItem'
import "./css/index.css"

var App=React.createClass({
	getInitialState:function(){
		return{
			todo:["By Flowers","Read Book","Watch TV"]
		}
	},
	render:function(){
		var todos=this.state.todo;
		todos=todos.map(function(item,index){
			return(<TodoItem item={item} key={index} onDelete={this.onDelete}/>)
		}.bind(this));
		return(
				<div id="todo-list">
				<h1>Todo List</h1>
					<ul>{todos}</ul>
					<Add onAdd={this.onAdd} />
				</div>
			   )
	},
	onDelete:function(item){
	var updateTodos=this.state.todo.filter(function(val,index){
			return item !==val;

	});
		this.setState({
			todo:updateTodos
			
		});
		console.log("new Value "+updateTodos);
	},
	onAdd:function(item){
		var AddTodos=this.state.todo;
		AddTodos.push(item);
		this.setState({
		todo:AddTodos
	})
}
});


ReactDOM.render(<App/>,document.getElementById('app'));
























// var ReactDOM =require('react');
// var ReactDOM=require('react-dom');

// var AppComp=React.createClass({
// 	render:function(){
// 		return(
// 				<h1>Hiiii</h1>
// 			)
// 	}
// });
// ReactDOM.render(<AppComp />,document.getElementById('app'))


// import React from 'react';
// import ReactDOM from 'react-dom';

// var App = React.createClass({
// 	getInitialState: function(){
// 		return {
// 			todo:["Reading","swimming","coding","walking"],
// 			age:'33'
// 		}
// 	},

	
//     render: function(){
//     // var ager=setTimeout(function(){
//     // 	this.setState({age:Date().toLocaleString()})
//     // }.bind(this),1000)
//     var todos=this.state.todo;
//     todos=todos.map(function(item,index){
//     	return( <li>{item}</li>);
        
//        });

//     	return(
//     	<div>
//     		<h1>Hobbies:</h1>
//     		<p>{this.state.name}</p>
//     		<ul>{todos}</ul>
//     	</div>);
// }
// });

ReactDOM.render(<App />,document.getElementById('app'))