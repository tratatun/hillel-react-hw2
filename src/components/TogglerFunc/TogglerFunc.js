import React, { useState } from "react";
import {Button} from 'semantic-ui-react'

function TogglerFunc() {
    const [isToggled, setToggled] = useState(false);

    return (
            <>
                <Button onClick={() => setToggled(!isToggled)} >Toggle</Button>
                {isToggled && 'Скрывающийся текст (функциональный компонент)'}
            </>
        );
}

export default TogglerFunc;