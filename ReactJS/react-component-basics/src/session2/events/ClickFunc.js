import React from 'react'

function ClickFunc(){
    function loginHandler(){
        console.log("login button clicked - function component")
    }

    return <button onClick={loginHandler()}>Login</button>
}

export default ClickFunc