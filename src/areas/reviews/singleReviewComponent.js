import React from 'react';
import StarRatings from 'react-star-ratings';
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
} from 'styled-card-component';
import moment from 'moment';

class SingleReview extends React.Component {
  render() {
    return (
      <div style={{marginBottom: '1rem'}}>
        <Card>
          <CardBody>
            <CardTitle h4 style={{fontWeight:700}}>
              {this.props.headline}
            </CardTitle>
            <CardTitle h6 muted subtitle style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
              {moment(this.props.date).format('MMMM Do, YYYY')} by {this.props.name}
            </CardTitle>
            <CardText>
              {this.props.body}
            </CardText>
            <StarRatings
              rating={this.props.rating}
              starRatedColor="orange"
              starHoverColor="orange"
              starEmptyColor="grey"
              starDimension={'20px'}
              numberOfStars={this.props.rating}
              name='rating'
            />
          </CardBody>
        </Card>
    </div>
    )
  }
}

export default SingleReview;