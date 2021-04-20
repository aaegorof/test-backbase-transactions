import React, {useState, useEffect} from 'react'
import './button.scss'

type Props = {
    type?: 'primary' | 'active' | 'default'
    onClick: any
    disabled?: boolean
    shape?: 'rounded' | 'default'
}

const Button: React.FC<Props> = ({type = 'default', children, onClick, shape ='default'}) => {
    const [state, setState] = useState()

    useEffect(() => {

    }, [])

    return (
        <button className={`button type-${type} shape-${shape}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
