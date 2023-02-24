import {useState, createContext } from 'react'
//importing the required modules
export const CollabNotifications = createContext()
// creates the context that will be used in the component file
export const CollabNotificationsProvider = (props) => {
    const [collabNotification, setCollabNotification] = useState(0)
//state value that will be called in the components
    return <CollabNotifications.Provider value={[collabNotification, setCollabNotification]}><>{props.children}</>
</CollabNotifications.Provider>
}

