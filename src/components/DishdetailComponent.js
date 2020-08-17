import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        if (this.props.selectedDish != null) {  
            return (
                <div className ="row" >
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" object src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                            <CardBody>
                                <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                <CardText>{this.props.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            );
        } else {
            return (
                <div>

                </div>
            )
        }
        
    };

    renderComments(comments) {

        const listComments = comments.map((comment) => {
            return(
                <div key={comments.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            )
        });

        if ( comments != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {listComments}
                    </ul>
                </div>
                
            )
        } else {
            return(
                <div></div>
            )
        }
    };
}

export default DishDetail;