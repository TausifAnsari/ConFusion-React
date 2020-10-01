import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


//This fuction takes dish as a parametr and renders Dish on the page.
function RenderDish({dish}) {
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

//This fuction takes comment as a parameter and renders Comments on the page.
function RenderComments({comments}) {
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

const DishDetail = (props) => {
    if(!props.dish) {
        return (
            <div></div>
        );
    } else {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>
        );
    }
}


export default DishDetail;
