import type { ReactElement } from "react"

type MenuProps = {
    part: string;
}

export const Menu = ({part = ''}: MenuProps): ReactElement => {
    if(part === "hot"){
        return (
            <div className="menu-container">  
                <p className="menu-items">
                    Mocha Latte <br />
                    Caffe Formaggio <br />
                    Espresso <br />
                    Chai Verde Latte
                </p>
                <p className="menu-prices">
                    € 7.50 <br />
                    € 5.00 <br />
                    € 3.50 <br />
                    € 5.50
                </p>  
            </div>
        );
    }
    else if(part === "juicy"){
        return (
            <div className="menu-container">  
                <p className="menu-items">
                    Branched Apricots<br/>
                    Deep Rasberries<br/>
                    Smooth Oranges
                </p>
                <p className="menu-prices">
                    € 4.20<br/>
                    € 3.50<br/>
                    € 6.50
                </p>  
            </div>
        );
    }
    else {
        return (
            <div className="menu-container">  
                <p className="menu-items">
                    Mon-Sun <br/>
                    Caffe Retro<br/>
                    0123-45 67 89
                </p>
                <p className="menu-prices">
                     8am – 11pm<br/>
                    Canto VI<br/>
                    caffe@lorem.pge
                </p>  
            </div>
        );
    }
};