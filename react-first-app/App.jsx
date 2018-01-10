import React from 'react';

var App=React.createClass({
	getInitialState:function(){
		return{
			text:""
		}
		//this.onclick=this.onclick.bind(this);
	},
	getText:function(e){
		this.setState({text:e.target.value})
	},
	onclick:function(){
		this.setState({text:this.state.text});
	},
	render:function(){
		return(
			<div>
				<h1>Welcome !!!</h1>
				<h2>{this.state.text}</h2>
				<input type='text' onChange={e=>this.getText(e)}/>
				<button onClick={this.onclick}>Click</button>
			</div>
			);
	}
});

export default App