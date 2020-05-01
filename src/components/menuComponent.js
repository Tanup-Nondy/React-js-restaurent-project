import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle,CardText,CardBody} from 'reactstrap';
import DishDetailComponent from './DishDetailComponent.js';

class Menu extends Component{
	constructor(props){
		super(props);
		this.state={
			selectedDish:null,
		}
	}	
	selectDish(dish){
		this.setState({
			selectedDish:dish,
		})
	}
	
	render(){
		const menu=this.props.dishes.map((dish)=>{
			return (
				<div key={dish.id} className="col-12 col-sm-12 col-md-4 mt-5">
					<Card onClick={()=>this.selectDish(dish)}>
						<CardImg width="100%" src={dish.image} alt={dish.name} />
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		});
		return (
			<div className="container">
				<div className="row">
					{menu}
				</div>
				<DishDetailComponent dishes={this.state.selectedDish}/>
			</div>
		);
	}
}

export default Menu;
