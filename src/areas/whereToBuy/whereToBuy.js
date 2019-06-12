import React from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';
import { isLoggedIn, login, getUserProfile } from '../../auth/auth-service';
import api from '../../api';
import { RotateLoader } from 'react-spinners';

class WhereToBuy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waitingList: [],
            loading: true
        };
        this.joinList = this.joinList.bind(this);
    }
    async componentDidMount() {
        if(isLoggedIn()){
          const userProfile = await getUserProfile();
          if(userProfile){
            let newState = Object.assign({}, this.state);
            newState.family_name = userProfile.family_name;
            newState.given_name = userProfile.given_name;
            newState.email = userProfile.email;
            api.waitingList.getJoinedLists(userProfile.email).then(result => {
                newState.waitingList = result;
                newState.loading = false;
                this.setState(newState);
            });
          }
        } else {
          this.setState({loading:false});
        }
    }
    joinList (e) {
        if(isLoggedIn()){
          this.setState({ loading: true });
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
                    this.setState({ waitingList: joinedLists, loading: false });
                }
            });
        } else {
            login('/whereToBuy');
        }
    }
    render() {
        return (
            <div style={{marginBottom: '45rem'}} className="background">
                <Grid>
                    <Row>
                        <br></br>
                        <Col xs={12} className="text-center">
                            <h3>ALL OF OUR WHISKEY IS HANDMADE IN SMALL BATCHES</h3>
                            <h3>AND AS A RESULT, PRODUCTION IS VERY LIMITED</h3>
                            <h3>YOU CAN JOIN THE WAITING LIST TO GET A BOTTLE WHEN IT BECOMES AVAILABLE</h3>
                        </Col>
                        <div style={{paddingTop:"20rem"}} className="text-center">
                            <Col xs={6}>
                                <h3 style={{color:"grey"}}>KENTUCKY BOURBON WHISKEY</h3>
                                { this.state.waitingList.indexOf('kentucky_bourbon') > -1 ?
                                    <label>YOU ARE ON THE WAITING LIST!</label>
                                :
                                    <Button name='kentucky_bourbon' onClick={this.joinList} className="btn btn-primary">JOIN THE LIST</Button>
                                }
                            </Col>                   
                            <Col xs={6}>
                                <h3 style={{color:"grey"}}>PREMIUM SCOTCH</h3>
                                { this.state.waitingList.indexOf('scotch') > -1 ?
                                    <label>YOU ARE ON THE WAITING LIST!</label>
                                :
                                    <Button name='scotch' onClick={this.joinList} className="btn btn-primary">JOIN THE LIST</Button>
                                }
                            </Col>
                        </div>
                    </Row>
                    {this.state.loading && <div style={{top: '50%', left: '50%', position: 'fixed'}}><RotateLoader></RotateLoader></div>}
                </Grid>
            </div>
        )
    }
}
export default WhereToBuy;