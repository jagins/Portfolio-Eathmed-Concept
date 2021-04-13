import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import React from 'react';

interface Props {
    type: {name: string, value: boolean},
    onClick: () => void,
}

function TypeChip(props: Props) {
    return (
        <Chip 
            label={props.type.name} 
            variant='outlined' 
            clickable 
            avatar={<Avatar className={props.type.name.toLowerCase()}>{props.type.name[0]}</Avatar>} 
            onClick={props.onClick} 
            color={!props.type.value ? 'primary' : 'secondary'}
        />
    )
}

export default TypeChip;