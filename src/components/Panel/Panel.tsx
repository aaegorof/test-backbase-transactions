import React from 'react'
import './panel.scss'

type Props = {
    title: string
    icon?: string
}

const Panel: React.FC<Props> = (props) => {
    const {title, icon, children} = props

    return (
        <div className={"panel-wrap"}>
            <div className="panel-header">
                {icon && <img src={icon} alt={title}/>}
                <div className={'h3'}>{title}</div>
            </div>
            <div className="panel-body">
                {children}
            </div>
        </div>
    )
}

export default Panel
