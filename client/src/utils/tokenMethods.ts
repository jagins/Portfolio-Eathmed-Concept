import jwt_decode from 'jwt-decode';

interface Token {
    token: string,
    exp: number
}

export function setToken(token: string)
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
        const decodedToken = jwt_decode<Token>(token);
        if(Date.now() >= decodedToken.exp * 1000)
            return false
        else
            return true;
    }
}