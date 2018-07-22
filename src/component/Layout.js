import React from 'react'
import Aux from "../hoc/Util";
import cssstyle from "./Layout.css";


//Stateless Components

const Layout = (props) =>
    (
        <Aux>
            <div>
                Toolbar,SideDrawer,BackDrop
            </div>
            < main className={cssstyle.content}>
                {props.children}
            </main>
        </Aux>

    )

export default Layout;



