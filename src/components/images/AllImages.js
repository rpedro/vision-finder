import React, { Component } from 'react';
import classes from '../../App.css';

class AllImages extends Component {

state = {
    stats: 10,
    dir: "c:\\Temp"
}

    render () {

        const fs = require('fs');

        fs.unlink('/tmp/hello', (err) => {
        if (err) throw err;
        console.log('successfully deleted /tmp/hello');
        });

        let allImages =
        (
            <a className={classes.rightbox}>
                <p>{this.state.stats}</p>
                <span>Images</span>
            </a>
        );

        return allImages;
    }
}

export default AllImages;