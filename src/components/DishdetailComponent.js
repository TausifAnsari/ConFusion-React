import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { render } from '@testing-library/react';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    renderDish(dish) {
        if(!dish) {
            return (
                <div></div>
            );
        } else {
            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
            );
        }
    }

    renderComments(comments) {
        console.log(comments);
        if(!comments) {
            return(
                <div></div>
            );
        } else {
            const renderComments = comments.map((comment) => {
                let options = { year: 'numeric', month: 'short', day: 'numeric' };
                return(
                        <li>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} , <span>{new Date(comment.date).toLocaleDateString("en-US", options)}</span></p>
                        </li>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled"> {renderComments} </ul>
                </div>
            );
        }
    }
    render() {
        if(!this.props.dish) {
            return (
                <div></div>
            );
        } else {
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }
    }

}

export default DishDetail;