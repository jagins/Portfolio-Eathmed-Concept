import React from 'react';
import Radio from '@material-ui/core/Radio';
import {withStyles} from '@material-ui/styles';
import {green} from '@material-ui/core/colors';

interface Props {
    checked: boolean
}

const StyledRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600]
        },
    },
    checked: {}
})((props: Props) => <Radio color='default' {...props}/>)

export default StyledRadio;