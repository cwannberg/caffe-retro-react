import type { ReactElement } from "react";
import { Menu } from "./Menu";
import { ContainerBox } from "./ContainerBox";

type MainSectionProps = {
    part: string;
}
export const Mainsection = ({ part = ''}: MainSectionProps): ReactElement => {

    if(part === "hot") {
    return (
        <div className="photo-container-hot">
            <section className="content-container">
                <div className="h1-container">
                    <h1>Hot</h1>
                </div>
                <ContainerBox className="box1">
                    <p>Hot freshly ground black coffee or a cup of exquisite tea?</p>
                </ContainerBox>
                <ContainerBox className="box2">
                    <p>We give you that perfect cup every time.</p>
                </ContainerBox>
                
                <Menu part = "hot"/>
            </section>
        </div>
        );
    }
    else if(part === "juicy"){
        return (
         <div className="photo-container-juicy">
            <section className="content-container">
                <div className="h1-container">
                    <h1>Juicy</h1>
                </div>
                <ContainerBox className="box1">
                    <p>Ripe fruit - freshly squeezed.</p>
                </ContainerBox>
                <ContainerBox className="box2">
                    <p>It's as simple as that. Chunky or smooth - it's your choice.</p>
                </ContainerBox>
                <Menu part = "juicy"/>
            </section>
        </div>
        );
    }
    else{
        return (
         <div className="photo-container-cosy">
            <section className="content-container">
                <div className="h1-container">
                    <h1>Cosy</h1>
                </div>
                <ContainerBox className="box1">
                    <p>Hang around. Enjoy the settings.</p>
                </ContainerBox>
                <ContainerBox className="box2">
                    <p>Use our fast WiFi. Borrow a newspaper or a novel.</p>
                </ContainerBox>
                <Menu part = "cosy"/>
            </section>
        </div>
        );
    }
};