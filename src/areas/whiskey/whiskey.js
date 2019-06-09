import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import barrel_with_bottle from '../../shared/assets/barrel_with_bottle.jpg';

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
                        <Col xs={12} className="text-center">
                            <h4>EVERY WHISKEY IS METICULOUSLY HAND-CRAFTED AND MADE IN SMALL BATCHES TO ENSURE THE BEST QUALITY</h4>
                        </Col>
                        <Col xs={6} style={{paddingTop:"1rem"}}>
                            <h3 className="text-center">WHAT WE MAKE:</h3>
                            <h3 className="text-center" style={{color:"grey"}}>KENTUCKY BOURBON WHISKEY</h3>
                            <h3 className="text-center" style={{color:"grey"}}>PREMIUM SCOTCH</h3>
                        </Col>
                        <Col xs={6}>
                            <h5 className="text-center" style={{paddingTop:"2rem"}}>IT ALL STARTED WHEN I GOT A CHRISTMAS PRESENT FROM MY FINANCE</h5>
                            <h5 className="text-center">I WAS HOOKED AND IT WENT FROM SOMETHING FUN TO DO TO SOMETHING I LOVE</h5>
                            <Col xsHidden smHidden>
                                <img className="homeLogo" src={barrel_with_bottle} style={{transform: "rotate(90deg)", height:"350px", marginTop: "15%"}} alt="Dugger's Whiskey"/>
                            </Col>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default HomeComponent;