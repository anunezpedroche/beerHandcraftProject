import Http from "../Helpers/Http";

export async function logIn(body) {
    return await Http.post(
        body,
        '/api/users/logIn'
    );
}

export async function whoAmI() {
    return await Http.get(
        '/api/users/profile'
    );
}

export async function logout() {
    return await Http.get(
        '/api/users/logOut'
    );
}


export async function imLogged() {
    return await Http.get(
        '/api/users/imLogged'
    );
}
