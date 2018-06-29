import React from 'react';
import { Container, Row, Column } from '../components/layout';
import Alert from '../components/alert';

class HomeScreen extends React.Component
{
    render () {
        return (
            <Container>
                <Row>
                    <Column inLaptop="6" offsetInLaptop="2" inTablet="12">
                        <Alert hasPrimary>
                            A simple primary alert—check it out!
                        </Alert>
                    </Column>
                </Row>
            </Container>
        )
    }
}

export default HomeScreen;
