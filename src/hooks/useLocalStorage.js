import { useState } from 'react'

export function useLocalStorage(defaultTocken) {
    const [token, setToken] = useState(defaultTocken)

    const ls = {
        setItem(newToken) {
            localStorage.setItem(newToken, '')
            setToken(newToken)
        },
        removeItem() {
            localStorage.removeItem(token)
            this.setItem('')
        },
    }

    return { token, ls }
}
