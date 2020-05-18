import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



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