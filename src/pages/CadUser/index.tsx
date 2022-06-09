import React from "react";
import { useForm } from "react-hook-form";

interface dataCadUser{
    name:string
    cpf:string
    username:string
    email:string
    password:string
    confirmpassword:string
}

const CadUser:React.FC =()=>{
    const { register, handleSubmit } = useForm<dataCadUser>();
    const handleCadUser=(data:dataCadUser)=>{

    }

    return(
        <div>
            <form onSubmit={handleSubmit(handleCadUser)}>
                <div>
                    <input type="text" {...register("name")}/>
                </div>
                <div>
                    <input type="text" {...register("cpf")}/>
                </div>
                <div>
                    <input type="text" {...register("username")}/>
                </div>
                <div>
                    <input type="email" {...register("email")}/>
                </div>
                <div>
                    <input type="password" {...register("password")}/>
                </div>
                <div>
                    <input type="password" {...register("confirmpassword")}/>
                </div>
                <button>salvar</button>
            </form>
        </div>
    )
}

export default CadUser