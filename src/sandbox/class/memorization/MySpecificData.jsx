import { Typography } from '@mui/material'
import React, { memo } from 'react'

export default memo(function MySpecificData({ text }) {
    console.log('component ' + text);
    return (
        <>
            <Typography variant='body1' color='initial'>
                {text}
            </Typography>
        </>
    )
});
