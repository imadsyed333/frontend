import { Button, CardActionArea, Menu, MenuItem, Typography } from '@mui/material'
import { bindMenu, bindTrigger, usePopupState } from 'material-ui-popup-state/hooks'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../AuthContext'

export const AccountMenu = () => {
    const popupState = usePopupState({ variant: 'popover', popupId: 'accountMenu' })
    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext)

    const toProfile = () => {
        popupState.close()
        navigate('/profile')
    }

    const toLogout = () => {
        popupState.close()
        logout()
    }
    return (
        <>
            <CardActionArea sx={{
                display: 'flex',
                m: 1,
                p: 1,
            }} {...bindTrigger(popupState)}>
                <Typography variant='h6' noWrap
                    sx={{
                        width: 'fit-content',
                    }}>
                    Hi, {user?.name}!
                </Typography>
            </CardActionArea>
            <Menu {...bindMenu(popupState)} anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}>
                <MenuItem onClick={toProfile}>Profile</MenuItem>
                <MenuItem onClick={toLogout}>Logout</MenuItem>
            </Menu>
        </>
    )
}
