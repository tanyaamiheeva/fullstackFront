import React from "react";

function BackgroundPaper(props) {
    return (
        <div className={"Profile-main-block"}>
            <div className={"Pages-bottom"}>
            </div>
            <div className={"Pages-top"}>
                <div className={"Section-title-block"}>
                    <p className={"Section-title"}>
                        {props.paperHeader}
                    </p>
                    {props.headerButton}
                </div>
                <hr size={'1'} style={{color: "black", margin: "1px 0"}}/>
                {props.content}
            </div>
        </div>
    )
}

export default BackgroundPaper