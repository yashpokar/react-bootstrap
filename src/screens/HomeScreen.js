import React from 'react';
import { Container, Row, Column } from '../components/layout';

class HomeScreen extends React.Component
{
    render () {
        return (
            <Container>
                <Row>
                    <Column inLaptop="6" offsetInLaptop="2" inTablet="12">
                        .col-md-6.offset-md-2.col-sm-12
                    </Column>
                </Row>
            </Container>
        )
    }
}

export default HomeScreen;
