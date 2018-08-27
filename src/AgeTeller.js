import React, { Component } from 'react';
import style from './AgeTeller.css'
import { Button, Form, FormGroup, Input } from "reactstrap";

class AgeTeller extends Component {

    state = {

        newDate: ""
    }

    render() {
        return (
            <div className={style.BirthdayForm}>

                <Form inline>
                    <h2>Input Your Birthdaty</h2>
                    <FormGroup>
                        <Input onChange={event => this.setState({newDate: event.target.value})} type="date"/>
                    </FormGroup>
                    {''}
                    <Button onClick={() => this.changeBirthday()}>
                        Submit
                    </Button>

                </Form>


            </div>
        );
    }

    changeBirthday() {
        console.log(this.state)
    }
}


export default AgeTeller;
