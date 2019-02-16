import React { Fragment }from 'react';

class CommentBox extends React.Component{
	constructor(props){
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		event.preventDefault()
	}

	render() {
		return{
			<Fragment>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>留言内容</label>
						<input
							type="text"
							className="form-control"
							placeholder="请输入内容"
							ref={(textInput)=> {this.textInput=textInput}}
						/>
					<div>
					<button type="submit" className="btn">留言</button>
				</form>
			</Fragment>
		}
	}
}

export default CommentBox;