import React, { Component } from 'react';
import styles from '../css/CountDownScreen.css';

class CountDownScreen extends Component {
    render() {
        return (
            <div className={styles.Counter}>
                <div className={styles.title}>Count Down to December 25, 2017</div>
                <div>
                    <div className={styles.days}>14 days</div>
                    <div className={styles.hours}>30 Hours</div>
                    <div className={styles.mins}>15 mins</div>
                    <div className={styles.seconds}>20 secs</div>
                </div>
                <input placeholder='new Date' type="text"/>
                <button>Submit</button>
            </div>
        );
    }
}


export default CountDownScreen;