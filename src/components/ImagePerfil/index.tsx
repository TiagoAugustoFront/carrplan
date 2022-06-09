import React from "react";
import { Content, IconUser } from "./style";


export const ImagePerfil = ({ children, ...props }: any)=>{
    return(
        <Content>
            {children || <IconUser/> }
        </Content>
    )
}