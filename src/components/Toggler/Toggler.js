import React from "react";
import {Button} from 'semantic-ui-react'

class Toggler extends React.Component {
    state = {
        isToggled: false
    }

    toggleButtonClick = e => {
        this.setState({isToggled: !this.state.isToggled});
        console.log(this.state.isToggled);
    };

    render(){
        return (
            <>
                <Button onClick={this.toggleButtonClick} >Toggle</Button>
                {this.state.isToggled && 'Скрывающийся текст (классовый компонент)'}
            </>
        );
    }
}

export default Toggler;