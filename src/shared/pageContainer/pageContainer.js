import React from 'react';
import AppNavBar from '../navbar/navbar';
import AppFooter from '../footer/footer';

class PageContainer extends React.Component {
    render() {
        return (
            <div>
                <AppNavBar />
                {this.props.children}
                <AppFooter />
            </div>
        );
    }
}
export default PageContainer;