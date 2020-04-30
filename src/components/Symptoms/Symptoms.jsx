import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Symptoms.module.css';
import cx from 'classnames';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebIcon from '@material-ui/icons/Web';
const Symptoms = () => {
    return(
        <div className={styles.container}>
        <Grid container justify="center">
             <Grid item component={Card} xs={12} md={3} className={cx(styles.card)}>
                 <CardContent>
                     <Typography color="textSecondary" variant="h5" gutterBottom>Watch for symptoms</Typography>
                     <Typography variant="p">
                     People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. These symptoms may appear 2-14 days after exposure to the virus:
                     </Typography>
                     <br/>
                     <br/>
                     <Typography color="textPrimary">
                     <ul>
                     <li>Fever</li>
                     <li>Cough</li>
                     <li>Shortness of breath or difficulty breathing</li>
                     <li>Repeated shaking with chills</li>
                     <li>Muscle pain</li>
                     <li>Headache</li>
                     <li>Sore throat</li>
                     <li>New loss of taste or smell</li>
                     </ul>
                    </Typography> 
                    <Typography variant="p" color="textPrimary">
                    Children have similar symptoms to adults and generally have mild illness.
                    This list is not all inclusive. Please consult your medical provider for any other symptoms that are severe or concerning to you.
                    </Typography>
                    <br/>
                    <br/>
                    <Typography color="textSecondary">
                    <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html" target="_blank">Symptoms of Coronavirus (COVID-19)</a>
                     - United States Centers for Disease Control and Prevention (CDC)
                    </Typography>
                 </CardContent>
             </Grid>           

               <Grid item component={Card} xs={12} md={3} className={cx(styles.card)}>
                 <CardContent>
                     <Typography color="textSecondary" variant="h5" gutterBottom>Typical Symptoms</Typography>
                     <Typography variant="p">
COVID-19 typically causes flu-like symptoms including a fever and cough.
In some patients - particularly the elderly and others with other chronic health conditions - these symptoms can develop into pneumonia, with chest tightness, chest pain, and shortness of breath.
It seems to start with a fever, followed by a dry cough.
After a week, it can lead to shortness of breath, with about 20% of patients requiring hospital treatment.
Notably, the COVID-19 infection rarely seems to cause a runny nose, sneezing, or sore throat (these symptoms have been observed in only about 5% of patients). Sore throat, sneezing, and stuffy nose are most often signs of a cold.
                     </Typography>
                     <br/>
                     <br/>
                     <Typography color="textSecondary" variant="h5" gutterBottom>When to Seek Medical Attention</Typography>
                     <Typography color="textPrimary" gutterBottom>If you have any of <stron>these emergency warning signs*</stron> for COVID-19 get <strong> medical attention immediately:</strong></Typography>
                     <Typography color="textPrimary" variant="p" gutterBottom>
                         <ul>
                             <li>Trouble breathing</li>
                             <li>Persistent pain or pressure in the chest</li>
                             <li>New confusion or inability to arouse</li>
                             <li>Bluish lips or face</li>
                         </ul>
                     </Typography>
                     <Typography color="textPrimary" gutterBottom>*This list is not all inclusive. Please consult your medical provider for any other symptoms that are severe or concerning to you.</Typography>
                     <br/>
                     <Typography color="textPrimary" gutterBottom><strong>Call 911 if you have a medical emergency:</strong> Notify the operator that you have, or think you might have, COVID-19. If possible, put on a cloth face covering before medical help arrives.</Typography>
                 </CardContent>
             </Grid> 

              <Grid item component={Card} xs={12} md={3} className={cx(styles.card)}>
                 <CardContent>
                     <Typography color="textSecondary" variant="h5" gutterBottom>About this project</Typography>
                     <Typography variant="p">
                     <ul>
                        <li>Name: covid-19-tracker,</li>
                        <li>version: 0.1.0</li>  
                        <li>Author: Marc Reginald Panaligan</li>
                        <li>Description:  This project is created to monitor the data of the Infected, Recovered and Died because of the virus, it only tracks the current data of the current day it does not show the previous data 
                        of the country selected. The API used for this project is https://covid19.mathdro.id/api. And Credits to https://github.com/adrianhajdin for the reference.</li>  
                        </ul>
                             
                  </Typography>
                  
                     <Typography color="textSecondary" gutterBottom>Socials:</Typography>
                     <Typography color="textSecondary" gutterBottom><GitHubIcon/>: <a href="https://github.com/marcreginald" target="_blank">marcreginald</a></Typography>
                     <Typography color="textSecondary" gutterBottom><TwitterIcon/>: <a href="https://twitter.com/marc_panaligan" target="_blank">marc_panaligan</a></Typography>
                     <Typography color="textSecondary" gutterBottom><YouTubeIcon/>: <a href="https://www.youtube.com/channel/UCgn8-bPySGw9gTaIyjLLYXg" target="_blank">Marc Reginald</a></Typography>
                     <Typography color="textSecondary" gutterBottom><LinkedInIcon/>: <a href="https://www.linkedin.com/in/marc-reginald-panaligan-a06697123/" target="_blank">LinkedIn</a></Typography>
                     <Typography color="textSecondary" gutterBottom><WebIcon/>: <a href="https://marcreginald.github.io/marcreginald-portfolio/" target="_blank">My Portfolio</a></Typography>
                 </CardContent>
             </Grid>           
        </Grid>
    </div>
    )
}


export default Symptoms;