import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo_overlay from '../../shared/assets/logo_overlay2.png';

class AppFooter extends React.Component {
    render() {
        return (
            <Grid className="footerBackground">
                <Row>
                    <Col xs={4} className="text-center">
                        <a className="footerLink" href="/whiskey">OUR WHISKEY</a>
                    </Col>
                    <Col xs={4} className="text-center">
                        <a className="footerLink" href="/contactUs">CONTACT US</a>
                    </Col>
                    <Col xs={4} style={{paddingBottom:"1%"}} className="text-center">
                        <a className="footerLink" href="/whereToBuy">WHERE TO BUY</a>
                    </Col>
                    <Col xs={12} className="text-center">
                        <a href="/"><img src={logo_overlay} height={60}></img></a>
                    </Col>
                    <Col xs={12} className="text-center">
                        <strong><small className="whiteText">{new Date().getFullYear()} DUGGER'S WHISKEY-MINNEAPOLIS, MINNESOTA</small></strong>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default AppFooter;