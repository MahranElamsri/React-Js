import React from 'react';
import "./css/addItem.css"
var Add=React.createClass({
	render:function(){
		return(
			<div>
				<form id="add-todo" onSubmit={this.handleSubmit}>
				<input type="text" ref="newItem"/>
				<input type="submit" value="Add new item"/>
				</form>
			</div>

		);
	},
	handleSubmit:function(e){
		e.preventDefault();
		this.props.onAdd(this.refs.newItem.value)
		console.log(this.refs.newItem.value)
		this.refs.newItem.value="";
	}
});

module.exports=Add;