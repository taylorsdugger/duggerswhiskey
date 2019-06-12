import React from 'react';
import { Grid, Row, Col, FormGroup, Form, Button, ControlLabel, FormControl } from 'react-bootstrap';
import api from '../../api';
import StarRatings from 'react-star-ratings';
import { isLoggedIn, getUserProfile } from '../../auth/auth-service';
import { RotateLoader } from 'react-spinners';
import SingleReview from './singleReviewComponent';

class ReviewPage extends React.Component {
  state = {
    reviews: [],
    loading: true,
    rating: 5,
    overallRating: 5,
    formValid: false,
    headline: '',
    body: '',
    name: '',
    email: ''
  };

  async componentDidMount() {
    if(isLoggedIn()) {
      const userProfile = await getUserProfile();
      if(userProfile) this.setState({ name: userProfile.given_name + ' ' + userProfile.family_name, email: userProfile.email });
    }
    api.reviews.getReviews().then(result => {
      this.setState({reviews: result.reviews, overallRating: result.reviewSum[0].total, loading: false});
    }).catch(e => {
      this.setState({loading: false});
    });
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (this.state.headline && this.state.body && this.state.email && this.state.name && this.state.rating) {
      this.setState({ [name]: value, formValid: true });
    } else {
      this.setState({ [name]: value, formValid: false });
    }
  };

  changeRating = (newRating) => {
    this.setState({ rating: newRating });
  };

  submit = () => {
    this.setState({loading: true});

    const payload = {
      headline: this.state.headline,
      body: this.state.body,
      name: this.state.name,
      email: this.state.email,
      rating: this.state.rating
    };

    api.reviews.addReview(payload).then(result => {
      api.reviews.getReviews().then(result => {
        this.setState({reviews: result.reviews, overallRating: result.reviewSum[0].total,  loading: false});
      }).catch(e => {
        this.setState({loading: false});
      });
    }).catch(e => {
      this.setState({loading: false});
    });
  };

  renderReviews() {
    return this.state.reviews.map(r => {
      return <SingleReview body={r.body} headline={r.headline} name={r.name} rating={r.rating} date={r.date}></SingleReview>//<div key={r._id}>{r.body}</div>
    });
  };

  render() {
    return (
      <div className="background">
        <Grid>
          <Row>
            <br></br>
            <Col xs={12} className="text-center">
              <h1>WHAT PEOPLE ARE SAYING</h1>
            </Col>
            <Col xs={6} className="text-center">
              <h3>WHAT DO YOU THINK?</h3>
              <StarRatings
                rating={this.state.rating}
                starRatedColor="orange"
                starHoverColor="orange"
                starEmptyColor="grey"
                starDimension={'40px'}
                changeRating={this.changeRating}
                numberOfStars={5}
                name='rating'
              />
              <Form>
                <FormGroup controlId="given_name">
                  <ControlLabel>HEADLINE</ControlLabel>
                  <FormControl type="text" name="headline" value={this.state.headline} onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup controlId="family_name">
                  <ControlLabel>WRITE MORE...</ControlLabel>
                  <FormControl componentClass="textarea" name="body" value={this.state.body} onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup controlId="subject">
                  <ControlLabel>NAME</ControlLabel>
                  <FormControl type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup controlId="email">
                  <ControlLabel>EMAIL</ControlLabel>
                  <FormControl type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                </FormGroup>
              </Form>
              <Button onClick={this.submit} disabled={!this.state.formValid}>Submit</Button>
            </Col>
            <Col xs={6} className="text-center" >
              {this.state.loading && <div style={{top: '50%', left: '75%', position: 'fixed'}}><RotateLoader></RotateLoader></div>}
              <h3>OVERALL RATING: {this.state.overallRating}/5</h3>
              <StarRatings
                  rating={this.state.overallRating}
                  starRatedColor="orange"
                  starHoverColor="orange"
                  starEmptyColor="grey"
                  starDimension={'20px'}
                  numberOfStars={5}
                  name='overall'
                />
              {
                this.renderReviews()
              }
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
export default ReviewPage;