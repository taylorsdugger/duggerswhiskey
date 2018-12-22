import React from 'react';
import { Grid, Row, Col, Button, Image} from 'react-bootstrap';
import barrel_with_bottle from '../../shared/assets/logo_overlay3.png';

class HomeComponent extends React.Component {
    render() {
        return (
            <div className="background">
                <Grid>
                    <Row>
                        <br></br>
                        <Col md={12} xs={12}>
                            <Image responsive className="homeLogo" src={barrel_with_bottle} alt="Dugger's Whiskey"/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default HomeComponent;