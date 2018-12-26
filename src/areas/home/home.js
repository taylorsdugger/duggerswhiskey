import React from 'react';
import { Grid, Row, Col, Image} from 'react-bootstrap';
import barrel_with_bottle from '../../shared/assets/logo_overlay4.png';

class HomeComponent extends React.Component {
    render() {
        return (
            <div className="background">
                <Grid>
                    <Row>
                        <br></br>
                        <Col xs={12}>
                            <Image responsive className="homeLogo" src={barrel_with_bottle} alt="Dugger's Whiskey"/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default HomeComponent;