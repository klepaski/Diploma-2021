import {WrapperTab} from './styledTabs'

const Tab = ({title, active, ...props}) => {
    return (
        <WrapperTab active={active} {...props}>
            {title}
        </WrapperTab>
    )
}


export {Tab}