import React from 'react'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from './Tabs'

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#cfe8fc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(1)
    }
  }));

const SupportPage = () => {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth='md'>
              <div className={classes.root}>
                <Tabs />
              </div>
            </Container>
        </div>
        )
}

export default SupportPage