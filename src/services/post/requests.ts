import api from "../api"

export const postLogin = async(login:string, password:string)=>{
    const resp = api.post<IUser>("/login",{
        login:login,
        senha:password
    })
}

export const postCadUser = async(login:string, password:string)=>{
    const resp = api.post("/user/add",{
        login:login,
        senha:password
    })
}