import React from "react";
import { useForm } from "react-hook-form";
import Menu from "../../components/Menu";
import { postLogin } from "../../services/post/requests";
import * as Style from './style'


interface dataLogin{
    login: string
    password: string
}

const Login:React.FC =()=>{
    const { register, handleSubmit } = useForm<dataLogin>();
    const handleLogin =async(data:dataLogin)=>{
        const resp = await postLogin(data.login,data.password);
        return resp;
    }

    return(
        <Style.ContentLogin>
            <Menu type="limpo"/>
            <Style.Container>
                <Style.ContentForm onSubmit={handleSubmit(handleLogin)}>
                    <Style.ContentBorder/>
                    <Style.ContentInput>
                        <Style.LabelInput>login</Style.LabelInput>
                        <Style.Input {...register("login")} type="text" />
                    </Style.ContentInput>
                    <Style.ContentInput>
                        <Style.LabelInput>senha</Style.LabelInput>
                        <Style.Input {...register("password")} type="password" />
                    </Style.ContentInput>
                    <Style.Button>ENTRAR</Style.Button>
                </Style.ContentForm>
            </Style.Container>
        </Style.ContentLogin>
    )
}

export default Login;