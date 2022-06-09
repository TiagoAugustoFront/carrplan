import React from "react";
import Logo from "../../assets/Logo/logo.svg";
import * as Style from "./style"

interface MenuType{
    type?: 'limpo'|'primary'
}

const Menu:React.FC<MenuType>=({type})=>{
    return(
        <Style.Content>
            <Style.ContentBorder/>
            <Style.ContentLogo>
                <img src={Logo}/>
            </Style.ContentLogo>
            {type !== 'limpo'&&
                <Style.ContentItens>
                    <Style.Itens>RECRUTAMENTO</Style.Itens>
                    <Style.Itens>GUIA DE ESTUDO</Style.Itens>
                    <Style.Itens>TIAGO AUGUSTO<Style.KeyDown/></Style.Itens>
                </Style.ContentItens>
            }
        </Style.Content>
    )
}

export default Menu;