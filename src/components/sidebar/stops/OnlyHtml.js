import React from "react";

const OnlyHtml = props => (
    <span className='stops-only' onClick={() => props.only(props.filter)}>
        Только
    </span>
);

export default OnlyHtml;