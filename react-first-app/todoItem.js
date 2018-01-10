import React from 'react';
import "./css/todoItem.css"
var TodoItem=React.createClass({
	render:function(){
		return(
				<div>
					<li>
					<div className="todo-item">
					<span className="item-name">{this.props.item}</span>
					<span className='item-remove' onClick={this.handleDelete}> x</span>
					</div>
					</li>
				</div>

				)
	},
	handleDelete:function(){
		this.props.onDelete(this.props.item);
		console.log("delete "+this.props.item)
		}
	
})

module.exports=TodoItem
