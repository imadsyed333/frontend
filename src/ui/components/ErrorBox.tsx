import { Box, List, ListItem, ListItemIcon, Typography } from '@mui/material'
import React from 'react'

export const ErrorBox = ({ errors }: { errors: String[] | undefined }) => {
    return (
        <>
            {
                errors ? (
                    <List sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }} disablePadding>
                        {
                            errors.map((error, key) => (
                                <ListItem key={key} disablePadding disableGutters>
                                    <Typography variant='caption' sx={{
                                        color: 'red'
                                    }}>- {error}</Typography>
                                </ListItem>
                            ))
                        }
                    </List>
                ) : <></>
            }
        </>
    )
}
