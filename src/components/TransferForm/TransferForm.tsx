import React, {useState, useEffect} from 'react'
import Panel from "../Panel/Panel";
import arrows from '../../assets/icons/arrows.png'


const TransferForm: React.FC = () => {
    const [state, setState] = useState()

    return (
        <div className={"transfer-form-wrap"}>
            <Panel title={'Make a Transfer'} icon={arrows}>
                this is transfer
            </Panel>
        </div>
    )
}

export default TransferForm
