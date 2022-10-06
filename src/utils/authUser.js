import jwt_decode from "jwt-decode";

export const authUser = (token) => {
    let user
    try {
        user = jwt_decode(token).name
    } catch (err) {
        user = ''
    }
    return user
}