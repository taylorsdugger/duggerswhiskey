import React from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';
import { isLoggedIn, login, getUserProfile } from '../../auth/auth-service';
import api from '../../api';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waitingList: []
        };
        this.joinList = this.joinList.bind(this);
    }
    componentDidMount() {
        if(isLoggedIn()){
            getUserProfile().then(x => {
                let newState = Object.assign({}, this.state);
                newState.family_name = x.family_name;
                newState.given_name = x.given_name;
                newState.email = x.email;
                api.waitingList.getJoinedLists(x.email).then(result => {
                    newState.waitingList = result;
                    this.setState(newState);
                });
            });
        }
    }
    joinList (e) {
        if(isLoggedIn()){
            const name = e.target.name;
            const payload = {
                whiskey_type: name,
                email: this.state.email,
                given_name: this.state.given_name,
                family_name: this.state.family_name
            }
            api.waitingList.joinWaitingList(payload).then(() => {
                const joinedLists = this.state.waitingList;
                if(joinedLists.indexOf(name) === -1){
                    joinedLists.push(name);
                    this.setState({ waitingList: joinedLists });
                }
            });
        } else {
            login('/whereToBuy')
        }
    }
    render() {
        return (
            <div className="background">
                <Grid>
                    <Row>
                        <br></br>
                        <Col xs={12} className="text-center">
                            <h3>ALL OF OUR WHISKEY IS HANDMADE IN SMALL BATCHES</h3>
                            <h3>AND AS A RESULT, PRODUCTION IS VERY LIMITED</h3>
                            <h3>YOU CAN JOIN THE WAITING LIST TO BUY A BOTTLE WHEN IT BECOMES AVAILABLE</h3>
                        </Col>
                        <div style={{paddingTop:"20rem"}} className="text-center">
                            <Col xs={4}>
                                <h3 style={{color:"grey"}}>KENTUCKY BOURBON WHISKEY</h3>
                                { this.state.waitingList.indexOf('kentucky_bourbon') > -1 ?
                                    <label>YOU ARE ON THE WAITING LIST ALREADY!</label>
                                :
                                    <Button name='kentucky_bourbon' onClick={this.joinList} className="btn btn-primary">JOIN THE LIST</Button>
                                }
                            </Col>                   
                            <Col xs={4}>
                                <h3 style={{color:"grey"}}>PREMIUM SCOTCH</h3>
                                { this.state.waitingList.indexOf('scotch') > -1 ?
                                    <label>YOU ARE ON THE WAITING LIST ALREADY!</label>
                                :
                                    <Button name='scotch' onClick={this.joinList} className="btn btn-primary">JOIN THE LIST</Button>
                                }
                            </Col>
                            <Col xs={4}>
                                <h3 style={{color:"grey"}}>CINNAMON WHISKEY LIQUEUR</h3>
                                { this.state.waitingList.indexOf('cinnamon_whiskey') > -1 ?
                                    <label>YOU ARE ON THE WAITING LIST ALREADY!</label>
                                :
                                    <Button name='cinnamon_whiskey' onClick={this.joinList} className="btn btn-primary">JOIN THE LIST</Button>
                                }
                            </Col>
                        </div>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default HomeComponent;