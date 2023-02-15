import React from 'react';


type SuperButtonPropsType = {
    className: string
    onClick: () => void
    name: string
    disabled: boolean
}

const SuperButton = (props: SuperButtonPropsType) => {
    return (
        <button className={props.className} disabled={props.disabled} onClick={props.onClick}>{props.name}</button>
    );
};

export default SuperButton;