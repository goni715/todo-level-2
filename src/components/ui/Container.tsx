import { ReactNode } from "react";

type TContainerProps = {
    children: ReactNode
}


const Container = ({children} : TContainerProps) => {
    return (
        <>
            <div className="min-h-[90vh] w-full max-w-7xl mx-auto pb-4">
                {children}
            </div>
        </>
    );
};

export default Container;