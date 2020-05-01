import React,{Component} from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';

class DishDetailComponent extends Component{
	constructor(props){
		super(props);
	}
	renderComments(){
		if(this.props.dishes.comments!=null){
			const comments=this.props.dishes.comments.map((comm)=>{
				return (
					<li key={comm.id}>
						<p>{comm.comment}</p>
						<p>--{comm.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comm.date)))}</p>
					</li>
				);
			});
			return (
				<div>
					<h4>Comments</h4>
					<ul className="list-unstyled">
					{comments}
					</ul>
				</div>
			);
		}else{
			return (
				<div></div>
			);
		}
	}
	render(){
		
		if(this.props.dishes !=null){
			return (
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<Card>
							<CardImg width="100%" src={this.props.dishes.image} alt={this.props.dishes.name} />
							<CardBody>
								<CardTitle>
									{this.props.dishes.name}
								</CardTitle>
								<CardText>
									{this.props.dishes.description}
								</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="col-12 col-md-5 m-1">
						{this.renderComments(this.props.dishes.comments)}
					</div>
				</div>
				);
		}
		else{
				return (
				<div></div>
			);
		}			

	}
}
export default DishDetailComponent;