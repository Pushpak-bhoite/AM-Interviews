import React from 'react'
import PureComp from './pureComp'
import Wrapper from './wrapper'
const EnhancedComp = Wrapper(PureComp)
const HOC = () => {
    return (
        <div>
            <EnhancedComp productName={'mitty'} discount={20}/>
        </div>
    )
}

export default HOC
