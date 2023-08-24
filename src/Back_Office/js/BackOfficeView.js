import React,{useState} from "react";

import BackOfficeViewItem from "./BackOfficeViewItem";

export function BackOfficeView() {

    const [test1,setTest1] = useState("스터디");
    const [test2,setTest2] = useState([
    {title:"웹스터디",term:"2023 여름방학",state:0,img_src:"https://i.namu.wiki/i/moPntuOiEHZEps0B7K6cnkqUAVEw6hGcQHNPjxux8kWTu1dCnuL5omnASs7f0BAvhOQJ2Qo9pxoUOKQ1xcJoUHYjLg1Am5iuJo3nsrr48c0Xk1KnBrJPe9vS3-AOpXFIcJrd3uQoEEVD4BF1oa_jKg.svg"},
    {title:"게임스터디",term:"2023 여름방학",state:1,img_src:"https://i.namu.wiki/i/moPntuOiEHZEps0B7K6cnkqUAVEw6hGcQHNPjxux8kWTu1dCnuL5omnASs7f0BAvhOQJ2Qo9pxoUOKQ1xcJoUHYjLg1Am5iuJo3nsrr48c0Xk1KnBrJPe9vS3-AOpXFIcJrd3uQoEEVD4BF1oa_jKg.svg"},
    {title:"AI스터디",term:"2023 여름방학",state:2,img_src:"https://i.namu.wiki/i/moPntuOiEHZEps0B7K6cnkqUAVEw6hGcQHNPjxux8kWTu1dCnuL5omnASs7f0BAvhOQJ2Qo9pxoUOKQ1xcJoUHYjLg1Am5iuJo3nsrr48c0Xk1KnBrJPe9vS3-AOpXFIcJrd3uQoEEVD4BF1oa_jKg.svg"},
    {title:"알고리즘스터디",term:"2023 여름방학",state:2,img_src:"https://i.namu.wiki/i/moPntuOiEHZEps0B7K6cnkqUAVEw6hGcQHNPjxux8kWTu1dCnuL5omnASs7f0BAvhOQJ2Qo9pxoUOKQ1xcJoUHYjLg1Am5iuJo3nsrr48c0Xk1KnBrJPe9vS3-AOpXFIcJrd3uQoEEVD4BF1oa_jKg.svg"}])

    return(<>
        <div className="title">{test1}</div>
        <div className="item_list">
            {test2.map((value,key)=>{
                return(<>
                <BackOfficeViewItem value={value} test2={test2}></BackOfficeViewItem>
                </> 
                )
            })}
        </div>

        </>
    )
}