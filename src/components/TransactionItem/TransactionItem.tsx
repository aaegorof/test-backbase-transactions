import React, {useState} from 'react'
import {ITransactionItem} from "./types";
import {isoToDayFormat} from "../../assets/utils/functions";
import './transactionItem.scss'

type Props = {
    transaction: ITransactionItem
}

const TransactionItem: React.FC<Props> = ({transaction}) => {
    const {transactionDate, amount, categoryCode, merchant, merchantLogo, transactionType} = transaction
    const [state, setState] = useState()


    return (
        <div className={"transaction-item-wrap"} style={{borderLeftColor: categoryCode}}>
            <div className="date">{isoToDayFormat(transactionDate)}</div>
            <img src={merchantLogo} className={'merchant-logo'} alt={merchant}/>
            <div className="transaction-description">
                <div className="merchant-title">{merchant}</div>
                <div className="transaction-type">{transactionType}</div>
            </div>
            <div className="amount">-${amount}</div>
        </div>
    )
}

export default TransactionItem
