import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem';

// 必须继承Component;
class TodoList extends Component {

	constructor(props){
		super(props);
		this.state={
			list: [
				'learn react',
				'learn vue',
				'learn js'
			],
			inputValue: ''
		}
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleBtnClick=this.handleBtnClick.bind(this)
		this.handleDelete=this.handleDelete.bind(this)
	}
	
	handleBtnClick(){
		this.setState({
			list: [...this.state.list,this.state.inputValue],
			// ...表示之前的项目
			inputValue: ''
		})
	}

	handleInputChange(e){
		this.setState({
			inputValue:e.target.value
		})
	}

	// handleItemClick(index){
	// 	const list= [...this.state.list];
	// 	list.splice(index,1);
	// 	//调试数据 用副本
	// 	this.setState({
	// 		list
	// 	})
	// }

	handleDelete(index){
		const list= [...this.state.list];
		list.splice(index,1);
		//调试数据 用副本
		this.setState({
			list
		})
	}
	// 父组件通过属性的形式向子组件传递参数
	// 子组件通过props接受父组件传递过来的参数
	// 
	getTodoItems(){
		return(
			this.state.list.map((item,index)=>{
				return(
						<TodoItem 
							delete={this.handleDelete} 
							key={index} 
							content={item} 
							index={index}
							/>
				  	// return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
				  	);
			  	})
		)
		
	}
  	render() {
	    return (
	    	<Fragment>
		    	<div>
			        <input value={this.state.inputValue} onChange={this.handleInputChange} />
			        <button onClick={this.handleBtnClick}>add</button>
		      	</div>
			    <ul>{this.getTodoItems()}</ul>
	    	</Fragment>
	    );
  	}
}

export default TodoList;
