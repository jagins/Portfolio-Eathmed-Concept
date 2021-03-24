import jwt_decode from 'jwt-decode';
export function setToken(token)
{
    localStorage.setItem('token', token);
}

export function getToken()
{
    return localStorage.getItem('token');
}

export function checkValidToken()
{
    const token = getToken();
    if(token)
    {
        const decodedToken = jwt_decode(token);
        if(Date.now() >= decodedToken.exp * 1000)
            return false
        else
            return true;
    }
}