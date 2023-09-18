import React from react;

export function BOStudyItem(){
    return( 
    <div className="ComBOStudyItem">
        <div className="study_img"></div>
        <div className="line_one">
            <div className="study_title"></div>
            <div className="delete_btn"></div>
            <div className="edit_btn"></div>
        </div>
        <div className="line_two">
            <div className="term"></div>
            <div className="status"></div>
        </div>
    </div>
    )
}