import React from 'react'

const Wrapper = (PureComp) => {
    return (props) => {
        const { discount } = props
        return (
            <div>
                {discount && <div>{discount}</div>}
                <PureComp {...props} />
            </div>
        )
    }
}

export default Wrapper
