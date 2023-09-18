import React, {useState} from "react";

export function BackOfficeSidebar(){
    
    const [test,setTest] = useState(["멤버","스터디","수상내역"]);


    return(
        <div>
        <div className="close_btn"></div>
        <div className="page_list">
            <div className="BO_title">페이지</div>
                {test.map((value,index) => {
                    return(
                        <div className=" page_li">{value}</div>
                    )
                })}
                
        </div>
        </div>
    )
}