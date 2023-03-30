export const login = () => {
    localStorage.setItem("isAuthenticated", true)
}

export const isAuthenticated = () => {
    const authentication = localStorage.getItem("isAuthenticated")
    return !!authentication
}

export const logout = () => {
    localStorage.removeItem("isAuthenticated")
}