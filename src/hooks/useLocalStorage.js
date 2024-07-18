import { useState } from 'react'

export const useLocalStorage = (defaultTocken) => {
    const [token, setToken] = useState(defaultTocken)

    const setItem = (newToken) => {
        localStorage.setItem(newToken, '')
        setToken(newToken)
    }
    const removeItem = () => {
        localStorage.removeItem(token)
        setItem('')
    }

    return [token, { setItem, removeItem }]
}
