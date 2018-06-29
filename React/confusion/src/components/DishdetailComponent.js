import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    renderDish(dish) {
        console.log(dish);
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card >
                            <CardImg width="100%" object src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>

                    {this.renderComments(dish.comments)}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {

        if (comments != null) {

            const commentShow = comments.map((comment) => {
                console.log(comment);
                return (

                    <ul key={comment.id} className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>

                );
            });


            return (
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>
                    {commentShow}
                </div>

            );

        }
        else {
            return (
                <div></div>
            );
        }

    }

    render() {

        return (
            <div >
                {this.renderDish(this.props.selectedDish)}
            </div>
        );
    }

}

export default DishDetail;