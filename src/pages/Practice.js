import { Stack } from '@mui/material'
import React from 'react'
import Button from 'src/theme/overrides/Button'

const Practice = () => {
    const notifyMe = () => {
        // if (!("Notification" in window)) {
        //     // Check if the browser supports notifications
        //     alert("This browser does not support desktop notification");
        // } else if (window.Notification.permission === "granted") {
        //     // Check whether notification permissions have already been granted;
        //     // if so, create a notification
        //     const notification = new Notification("Hi there!");
        //     // …
        // } else if (window.Notification.permission !== "denied") {
        //     // We need to ask the user for permission
        //     window.Notification.requestPermission().then((permission) => {
        //         // If the user accepts, let's create a notification
        //         if (permission === "granted") {
        //             const notification = new Notification("Hi there!");
        //             // …
        //         }
        //     });
        // }

        // At last, if the user has denied notifications, and you
        // want to be respectful there is no need to bother them anymore.
    }
    return (
        <Stack justifyContent="center" >
            <Button onClick={notifyMe}>
                Show Notification
            </Button>
        </Stack>
    )
}


export default Practice