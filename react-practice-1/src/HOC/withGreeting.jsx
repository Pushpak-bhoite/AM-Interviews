import React from 'react'

function withGreeting(WrappedComponent) {
    return function EnhancedComponent(props) {
        return (<div>
            <p>Hello from HOC </p>
            <WrappedComponent {...props} />
        </div>)
    }
}

export default withGreeting