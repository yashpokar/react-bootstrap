import React from 'react';
import { Container, Row, Column } from '../components/layout';
import Alert, { AlertLink } from '../components/alert';

class HomeScreen extends React.Component
{
    render () {
        return (
            <Container>
                <Row>
                    <Column inLaptop="6" offsetInLaptop="2" inTablet="12">
                        <Alert isDark>
                            text inside alert

                            <AlertLink url="https://facebook.com">
                                an alert link
                            </AlertLink>
                        </Alert>
                    </Column>
                </Row>
            </Container>
        )
    }
}

export default HomeScreen;
