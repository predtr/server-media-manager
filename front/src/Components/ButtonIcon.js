import React from "react";
import {Button, Icon} from "semantic-ui-react";

export default function ButtonIcon({ text, onClick = null, icon = null }){
    return(
        <Button onClick={onClick} data-testid="button">
            {icon ?
                <Icon data-testid="icon" name={icon} />
                :
                <></>}
            {text}
        </Button>
    );
}