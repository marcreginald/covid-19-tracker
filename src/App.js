import React from 'react';

import {Cards, Chart, CountryPicker, NavBar, StickyFooter, Symptoms} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import {Typography} from '@material-ui/core';
class App extends React.Component {
   
    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        
        this.setState({data: fetchedData});
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        
        this.setState({data: fetchedData, country: country});
    }

    render() {
        const { data, country } = this.state;

        return(
            <div>
            <NavBar/>

            <div className={styles.container}>
            <br/>
                <Typography variant="h5">Stay Home and Stay Safe!</Typography>
            </div>
            <div className={styles.container}>
               <Cards data={data}/>
               <Typography variant="h5">Country: <CountryPicker handleCountryChange={this.handleCountryChange}/></Typography>
               <Chart data={data} country={country}/>
               <Symptoms/>
            </div>

            <StickyFooter/>
            </div>
        )

    }
}

export default App;