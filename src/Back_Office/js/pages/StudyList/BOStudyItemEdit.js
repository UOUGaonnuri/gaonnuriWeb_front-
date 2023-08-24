import React,{useState} from react;

export function BOStudyItemEdit() {
    
    const[url,serURL] = useState("none");

    return( 
        <div className="ComBOStudyEdit">
            <div className="study_img"></div>
            <div className="img_URL">
                <div className="guide"></div>
                <input/>
            </div>
            <div className="name"></div>    
            <div className="term"></div>
            <div className="status">
                <div className="recruiting">모집중</div>
                <div className="active">활동중</div>
                <div className="end">활동완료</div>
            </div>
        </div>
        )
}