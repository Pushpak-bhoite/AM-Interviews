
export default function Wrapper(PureFunc) {
    return function Enhanced(props){
        const {age} = props
        return (
            <div>
                <div>Badge{age}</div>
                <PureFunc {...props} />
            </div>
        )
    } 
} 