const enum ResponseEnum {
    Code = 'code',
    IdToken = 'id_token'
}

const enum ScopeEnum {
    Email = ' https://www.googleapis.com/auth/userinfo.email',
    Profile = ' https://www.googleapis.com/auth/userinfo.profile'
}

export { ResponseEnum, ScopeEnum };