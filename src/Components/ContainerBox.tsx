import type { ReactElement, ReactNode } from "react";

type ContainerBoxProps = {
    className?: string,
    children: ReactNode;
};

export const ContainerBox = ({className = "", children} : ContainerBoxProps): ReactElement => {
    return (
        <div className={`container ${className}`}>
            {children}
        </div>
    );
};