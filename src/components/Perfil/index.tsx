import React from "react"
import { ImagePerfil } from "../ImagePerfil"
import * as Style from "./style"
export const Perfil =()=>{
    return(
        <Style.Content>
            <Style.ContentImage>
                <ImagePerfil/>
            </Style.ContentImage>
        </Style.Content>
    )
}