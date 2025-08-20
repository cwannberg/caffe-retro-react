import type { ReactElement } from "react";

export const Header = (): ReactElement => {
    return (
        <header>
            <nav>
                <a href="#hot">Hot</a>
                <a href="#juicy">Juicy</a>
                <a href="#cosy">Cosy</a>
            </nav>
        </header>
    );
};