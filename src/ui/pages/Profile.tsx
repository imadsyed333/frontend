import React, { useEffect } from 'react'
import { getUserOrders } from '../../api/orderClient'

export const Profile = () => {
    useEffect(() => {
        getUserOrders().then((res) => {
            console.log(res.orders)
        }).catch(() => {
            console.log("Unexpected error")
        })
    }, [])
    return (
        <div>Profile</div>
    )
}
