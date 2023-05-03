import React from 'react';
import SwitchToggle from "react-native-switch-toggle";
function example(props) {
    return (
        <SwitchToggle switchOn={on} onPress={() => off(!on)} />
    );
}

export default example;