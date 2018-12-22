import React from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';
import { isLoggedIn, login } from '../../auth/auth-service';
import api from '../../api/waitingList';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waitingList: []
        };
        this.joinList = this.joinList.bind(this);
    }
    componentDidMount() {
        // getUserProfile().then(x => {
        //     this.setState({ picture: x.picture, nickname: x.nickname });
        // })
    }
    joinList () {
        if(isLoggedIn()){
            api.joinList().then((result) => {
                this.setState({ waitingList: 'kentucky_bourbon' });
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
                                <h3 style={{color:"darkgrey"}}>KENTUCKY BOURBON WHISKEY</h3>
                                { this.state.waitingList.indexOf('kentucky_bourbon') > -1 ?
                                    <label>You're on the list!</label>
                                :
                                    <Button onClick={this.joinList} className="btn btn-primary">JOIN THE LIST</Button>
                                }
                            </Col>                   
                            <Col xs={4}>
                                <h3 style={{color:"darkgrey"}}>PREMIUM SCOTCH</h3>
                                { this.state.waitingList.indexOf('scotch') > -1 ?
                                    <label>You're on the list!</label>
                                :
                                    <Button onClick={this.joinList} className="btn btn-primary">JOIN THE LIST</Button>
                                }
                            </Col>
                            <Col xs={4}>
                                <h3 style={{color:"darkgrey"}}>CINNAMON WHISKEY LIQUEUR</h3>
                                { this.state.waitingList.indexOf('cinnamon_whiskey') > -1 ?
                                    <label>You're on the list!</label>
                                :
                                    <Button onClick={this.joinList} className="btn btn-primary">JOIN THE LIST</Button>
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