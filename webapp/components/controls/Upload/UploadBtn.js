import React, {useCallback} from "react";
import {useDropzone} from 'react-dropzone'


export default function UploadBtn ({accept, multiple, Btn, onDropFiles }) {
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: accept? accept : '',
        multiple: multiple? true : false,
        onDrop: acceptedFiles => {
            let files = acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));
            onDropFiles(files)
        }
    });


    return (
            <div {...getRootProps()} style={{display: 'inline-block'}}>
                <input {...getInputProps()} />
                {Btn}
            </div>

    )
}


