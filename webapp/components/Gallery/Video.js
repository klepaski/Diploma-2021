import React from "react";

export const Video = ({src}) => {
    const getId = url => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }

    const videoId = getId(src);


    return <iframe src={`//www.youtube.com/embed/${videoId}`} height={200} />
}