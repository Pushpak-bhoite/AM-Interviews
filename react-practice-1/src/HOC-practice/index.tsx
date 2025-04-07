import React from 'react'
import PureComp from './PureComp';
import Wrapper from './Wrapper';

const FinalComp = Wrapper(PureComp)
export default function Hoc() {
    return (
        <FinalComp name='ram' age={20} />
    )
}