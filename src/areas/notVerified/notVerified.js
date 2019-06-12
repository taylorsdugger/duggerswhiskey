import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

class NotVerified extends React.Component {
    render() {
        return (
            <div className="background">
                <Grid>
                    <Row>
                        <br></br>
                        <Col xs={12}>
                          <h2>Sorry, you need to be of legal the drinking age to enter this site.</h2>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default NotVerified;