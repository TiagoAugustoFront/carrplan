import React from "react";
import Menu from "../../components/Menu";
import { Perfil } from "../../components/Perfil";
import * as Style from "./style"

const Home:React.FC =()=>{
    return(
        <div>
            <Style.Content>
                <Menu/>
                <Perfil />

            </Style.Content>
        </div>
    )
}

export default Home;