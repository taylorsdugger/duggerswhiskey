import React from 'react';  
import ReactModal from 'react-modal';
import DatePicker from 'react-date-picker';
import moment from 'moment';
import { Row, Col, Image, Button } from 'react-bootstrap';
import barrel_with_bottle from '../shared/assets/logo_overlay4.png';

export default function (WrappedComponent) {  
  return class Verify extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isVerified: localStorage["siteVerification"] || false,
        date: new Date()
      };
    }

    handleCloseModal = () => {
      this.setState({isVerified: true});
    };
  
    onDateChange = (e) => {
      this.setState({date: e});
    };

    checkAge = () => {
      if(moment(this.state.date).isBefore(moment(new Date()).subtract(21, 'years'))) {
        localStorage.setItem("siteVerification", true);
        this.setState({isVerified: true});
      } else {
        this.props.history.push('/notVerified');
      }
    };

    render() {
      return (
        <div>
          { this.state.isVerified ? <WrappedComponent {...this.props} /> : 
            <ReactModal 
            isOpen={!this.state.isVerified}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={false}
            >
            <Row>
              <Image style={{height:'20rem'}} className="homeLogo" src={barrel_with_bottle} alt="Dugger's Whiskey"/>
                <Col xs={0} sm={4}></Col>
                <Col xs={12} sm={4}>
                  <div>
                    <h3>ENTER YOUR DATE OF BIRTH.</h3>
                    <div style={{marginBottom: '2rem', marginTop: '2rem'}}>
                      <DatePicker
                        onChange={this.onDateChange}
                        value={this.state.date}
                      />
                    </div>
                    <Button variant="primary" size="lg" onClick={this.checkAge}>Enter Site</Button>
                  </div>
                </Col>
            </Row>
            </ReactModal>
          }
        </div>
      );
    }
  }

}