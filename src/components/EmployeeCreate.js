import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    label="Name"
                    placeholder="Jane Doe"
                    />
                </CardSection>
                
                <CardSection>
                    <Input 
                    label="Phone"
                    placeholder="020-123-4567" 
                />
                </CardSection>
                
                <CardSection>
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;