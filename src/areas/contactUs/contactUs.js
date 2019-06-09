import React from 'react';
import { Grid, Row, Col, Button, Image, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import { isLoggedIn, getUserProfile } from '../../auth/auth-service';
import barrel_front from '../../shared/assets/logo_black_white.png';
import api from '../../api';
import { RotateLoader } from 'react-spinners';

class HomeComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            waitingList: [],
            formValid: false,
            emailSent: false,
            family_name: '',
            given_name: '',
            email: '',
            subject: '',
            loading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }
    async componentDidMount() {
        if(isLoggedIn()) {
            const userProfile = await getUserProfile();
            if(userProfile) this.setState({ family_name: userProfile.family_name, given_name: userProfile.given_name, email: userProfile.email });
        }
    }
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        if(this.state.given_name && this.state.family_name && this.state.email && this.state.subject && this.state.message) {
            this.setState({ [name]: value, formValid: true });
        } else {
            this.setState({ [name]: value, formValid: false });
        }
    }
    sendEmail() {
        this.setState({ loading: true });
        api.email.sendEmail(this.state).then(function(){
            console.log('done!')
            this.setState({ emailSent: true, loading: false });
        }.bind(this)).catch(function(error){
            console.log(error)
        });
    }
    render() {
        return (
            <div className="background">
                <Grid>
                    <Row>
                        <Col md={6} xsHidden smHidden>
                            <Image responsive className="homeLogo" src={barrel_front} alt="Dugger's Whiskey"/>
                        </Col>
                            <Col xs={12} md={6} className="text-center">
                                <h1>CONTACT US</h1>
                                {!this.state.emailSent ?
                                    <form style={{paddingTop:"6rem"}}>
                                        <FormGroup controlId="given_name">
                                            <ControlLabel>FIRST NAME</ControlLabel>
                                            <FormControl type="text" name="given_name" value={this.state.given_name} onChange={this.handleChange}/>
                                        </FormGroup>

                                        <FormGroup controlId="family_name">
                                            <ControlLabel>LAST NAME</ControlLabel>
                                            <FormControl type="text" name="family_name" value={this.state.family_name} onChange={this.handleChange}/>
                                        </FormGroup>

                                        <FormGroup controlId="email">
                                            <ControlLabel>EMAIL</ControlLabel>
                                            <FormControl type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                                        </FormGroup>

                                        <FormGroup controlId="subject">
                                            <ControlLabel>SUBJECT</ControlLabel>
                                            <FormControl type="text" name="subject" value={this.state.subject} onChange={this.handleChange}/>
                                        </FormGroup>

                                        <FormGroup controlId="message">
                                            <ControlLabel>MESSAGE</ControlLabel>
                                            <FormControl componentClass="textarea" name="message" value={this.state.message} onChange={this.handleChange}/>
                                        </FormGroup>
                                        
                                        <Button onClick={this.sendEmail} disabled={!this.state.formValid}>Submit</Button>
                                    </form>
                                : 
                                    <h4 style={{paddingTop:"6rem"}}>THANK YOU FOR CONTACTING US. WE GOT YOUR EMAIL AND WILL GET BACK TO YOU SOON! </h4>
                                }
                                {this.state.loading && <div style={{top: '50%', left: '75%', position: 'fixed'}}><RotateLoader></RotateLoader></div>}
                            </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default HomeComponent;