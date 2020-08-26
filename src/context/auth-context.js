import React from 'react'

const authContext = React.createContext({
    isAuthenticated: false,
    login: () => {console.log('authContext');}
})

export default authContext;