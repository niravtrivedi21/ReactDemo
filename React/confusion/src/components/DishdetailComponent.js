import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);

    }

    renderDish(dish) {
        if (dish != null) {
            return (

                    <div className="col-12 col-md-5 m-1">
                        <Card >
                            <CardImg width="100%" object src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
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
                return (

                    <ul key={comment.id} class="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author},{comment.date}</li>
                    </ul>

                );
            });


            return (

                <div >
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
            <div className="row">

                {this.renderDish(this.props.selectedDish)}

            </div>
        );
    }

}

export default DishDetail;