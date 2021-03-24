import React from 'react';
import Radio from '@material-ui/core/Radio';
import {withStyles} from '@material-ui/styles';
import {green} from '@material-ui/core/colors';

const StyledRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600]
        },
    },
    checked: {}
})((props) => <Radio color='default' {...props}/>)

export default StyledRadio;