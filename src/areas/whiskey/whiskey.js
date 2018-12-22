import React from 'react';
import { Grid, Row, Col, Button, Image} from 'react-bootstrap';
import bourbon from '../../shared/assets/bourbon.jpg';
import cinnamon from '../../shared/assets/cinnamon.jpg';
import scotch from '../../shared/assets/scotch.jpg';

class HomeComponent extends React.Component {
    render() {
        return (
            <div className="background">
                <Grid>
                    <Row>
                        <br></br>
                        <Col xs={12} className="text-center">
                            <h1>OUR WHISKEY</h1>
                        </Col>
                        <Col xs={4}>
                            <h3 className="text-center">KENTUCKY BOURBON WHISKEY</h3>
                            {/* <Image responsive className="homeLogo" src={bourbon} alt="Dugger's Whiskey"/> */}
                        </Col>
                        <Col xs={4}>
                            <h3 className="text-center">PREMIUM SCOTCH</h3>
                            {/* <Image responsive className="homeLogo" src={cinnamon} alt="Dugger's Whiskey"/> */}
                        </Col>
                        <Col xs={4}>
                            <h3 className="text-center">CINNAMON WHISKEY LIQUEUR</h3>
                            {/* <Image responsive className="homeLogo" src={scotch} alt="Dugger's Whiskey"/> */}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default HomeComponent;