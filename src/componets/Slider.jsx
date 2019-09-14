import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 20,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);
export default function PrettySlider(props) {
    return (
        <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            // aria-valuenow={props.value}
            value={props.value}
            step={1}
            min={0}
            max={10}
            onChange={props.onChange}
        />
    );
}
