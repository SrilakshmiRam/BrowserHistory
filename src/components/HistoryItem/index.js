import { MdOutlineDeleteOutline } from "react-icons/md";

import './index.css'

const HistoryItem=props=>{
    const {historyDetails,updatehistoryList}=props
    const {id,timeAccessed,logoUrl,title,domainUrl}=historyDetails
    const onClickDelete=()=>{
      updatehistoryList(id)
    }
    return(
        <li className='history-item'>
          <p className="time">{timeAccessed}</p>
          <div className="image-url-title">
            <img src={logoUrl} alt={title} className="image" />
            <p className="title">{title}</p>
            <p className="url-text">{domainUrl}</p>
          </div>
         <button type="button" className="delete-btn" onClick={onClickDelete}><MdOutlineDeleteOutline/></button>
        </li>
    )
}

export default HistoryItem