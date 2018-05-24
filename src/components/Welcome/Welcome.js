import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Box, Button } from '../';

import './Welcome.css';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #00a8b6, #00b3b6, #0abdb4, #2cc7ae, #49d1a7)';
    }

    componentWillUnmount() {
        document.body.style.backgroundImage = null;
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            redirect: true
        });
    }

    render() {
        if (this.state.redirect === true) {
            return (
                <Redirect to="/add" />
            )
        }
        return (
            <Box>
                <Box variant="card">
                    <div className="welcome">
                        <h2>Här var det tomt...</h2>
                        <p>Börja med att</p>
                        <Button onClick={this.handleClick}>
                            Lägga till en ny pryl
                        </Button>
                    </div>
                </Box>
            </Box>
        )
    }
}

export default Welcome;