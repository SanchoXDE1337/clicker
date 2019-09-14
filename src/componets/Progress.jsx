import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

/*const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});*/

export default function Progress(props) {
    return (
            <LinearProgress variant="determinate" value={props.value} />
    );
};
