import React, {useRef, useState, useEffect} from "react";
import Cropper from 'react-cropper';
import AvatarEditor from 'react-avatar-editor'
import 'cropperjs/dist/cropper.css';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import {ArrowLeft, UploadImg} from "../StyledComponents/Icon";
import {Text} from "../StyledComponents/Text";
import {WrapperHeight} from "../StyledComponents/Wrapper"
import {modifySrc} from "../../utils/modifySrc";
import {TextArea} from "../controls/Input/Input";
import {CoverPhotoPreview} from "./Photo";



const EditPhoto = ({handleBack, handleRotate, handleDelete, photo, keyPhoto, onChangePhotoDescription, hidedenDescription, loadingEdit}) => {
    const [step, setStep] = useState(0)
    const editorRef = useRef(null)
    const [rotateDeg, setRotateDeg] = useState(0)
    const [image, setImage] = useState({})
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [crop, setCrop] = useState({ aspect: 16 / 9 })
    const [croppedImageUrl, setCroppedImageUrl] = useState(null)
    const [blob, setBlob] = useState(null)

    let imageRef = useRef(null)

    const handleChangeStep = () => {
        if(step === 1 || step === 2) {
            setStep(0)
            return;
        }
        handleBack()
    }

    useEffect(() => {
        let src = photo.preview ? photo.preview : modifySrc(photo.photoUrl)
        photo.src = src;
        let img = new Image();
        img.src = src;
        img.onload = function(){
            setWidth(this.width)
            setHeight(this.height)
            setImage(photo)
        };
    }, [])
    const rotateLeft = e => {
        e.preventDefault()
        setRotateDeg(rotateDeg - 90)
    }
    const rotateRight = e => {
        e.preventDefault()
        setRotateDeg(rotateDeg + 90)
    }
    const handlePositionChange = e => {

    }
    const applyRotate = () => {
        if(rotateDeg === 0) {
            handleBack()
            return
        }
        if(image) {
            const url = editorRef.current.getImageScaledToCanvas().toDataURL()
            editorRef.current.getImageScaledToCanvas().toBlob(function (blob) {
                // return blob;
                handleRotate(blob, url, keyPhoto)
            }.bind(this), 'image/jpeg', 1);
        }
    }
    const applyCrop = () => {
        handleRotate(blob, croppedImageUrl, keyPhoto)
    }
    let styleCanvas = {
        'width': width,
        'height': height,
    }
    const styleImg = {
        width: '100%',
        height: '100%',
        background: `url(${image.src}) center center / contain no-repeat`,
        transform: `rotate(${rotateDeg}deg)`
    }

    const onChangeCrop = crop => {
        setCrop(crop);
    };
    const onCropComplete = crop => {
        makeClientCrop(crop);
    };
    const onImageLoaded = image => {
        // imageRef = image;
    };
    const makeClientCrop = async crop => {
        if (imageRef.current && crop.width && crop.height) {
            const croppedImageBlob = await getCroppedImg(
                imageRef.current.imageRef,
                crop,
                'newFile.jpeg'
            );
            setBlob(croppedImageBlob)
            let croppedImageUrl = window.URL.createObjectURL(croppedImageBlob);
            // window.URL.revokeObjectURL(this.fileUrl);
            setCroppedImageUrl(croppedImageUrl);
        }
    }

    const getCroppedImg = async (image, crop, fileName) => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = Math.ceil(crop.width*scaleX);
        canvas.height = Math.ceil(crop.height*scaleY);
        const ctx = canvas.getContext('2d');

        console.log('ctx', ctx)


        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width*scaleX,
            crop.height*scaleY

        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    console.error('Canvas is empty');
                    return;
                }

                blob.name = fileName;
                resolve(blob)
                // this.fileUrl = window.URL.createObjectURL(blob);
                // window.URL.revokeObjectURL(this.fileUrl);
                // resolve(this.fileUrl);
            }, 'image/jpeg');
        });
    }


    console.log(styleCanvas)

    return (
        <>
            <WrapperHeight>
                <div className={'z-photo-edit-header'}  >
                    <div className='display-flex' onClick={() => handleChangeStep()}>
                        <ArrowLeft mr={15}/>
                        <Text fz={14}>
                            {step === 0 && <>Description</>}
                            {step === 1 && <>Rotate photo</>}
                            {step === 2 && <>Crop photo</>}
                        </Text>
                    </div>
                    {step === 0 &&
                    <div className='display-flex'>
                        <div className='edit-photo-сhange-item' onClick={() => setStep(1)}>
                            rotate
                        </div>
                        <div className='edit-photo-сhange-item' onClick={() => setStep(2)}>
                            crop
                        </div>
                    </div>
                    }


                </div>

                {step === 0 &&
                <>
                    <CoverPhotoPreview src={photo.preview ? photo.preview : modifySrc(photo.photoUrl, 'offer')} mb={40} />

                    {!hidedenDescription &&
                    < TextArea name='describe'
                               value={photo.description || ''}
                               onChange={(e) => onChangePhotoDescription(photo.id, e.target.value)}
                               height={90}
                               count={photo.description? photo.description.length : ''}
                               placeholder="Add a short description of the photo, explain it to potential Clients"
                    />
                    }
                </>
                }

                {step === 1 &&
                <>
                    <div className="photo-rotate-container">
                        <div className="photo-rotate-wrapper">
                            <div className="photo-rotate-item" style={styleImg}></div>
                        </div>
                    </div>

                    <div className="z-avatar-editor-wrapper">
                        <AvatarEditor
                            ref={editorRef}
                            scale={1}
                            width={width}
                            height={height}
                            onPositionChange={handlePositionChange}
                            rotate={rotateDeg}
                            borderRadius={0}
                            color={[0, 0, 0, 0]}
                            style={styleCanvas}
                            image={image.src}
                        />
                    </div>
                </>
                }
                {step === 2 &&
                <>
                    <ReactCrop
                        ref={imageRef}
                        src={photo.preview ? photo.preview : modifySrc(photo.photoUrl, 'offer')}
                        crop={crop}
                        onImageLoaded={onImageLoaded}
                        onComplete={onCropComplete}
                        onChange={onChangeCrop}
                    />

                    {croppedImageUrl && (
                        <div className="z-cropped-wrapper">
                            <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
                        </div>
                    )}
                </>
                }

            </WrapperHeight>


            <div className="edit-photo-footer">
                {step === 0 &&
                <>
                    <div className='edit-photo-delete-item' onClick={() => handleDelete(keyPhoto)}>
                        Delete this photo
                    </div>
                    {/*<div className='edit-photo-footer-item' onClick={() => handleDelete(keyPhoto)}>Delete this photo</div>*/}
                </>
                }
                {step === 1 &&
                <>
                    <div className='edit-photo-footer-item' onClick={(e) => rotateRight(e)}>Rotate</div>
                    <div className='edit-photo-footer-item' onClick={() => applyRotate()}>{loadingEdit ? 'Loading...' : 'Apply'}</div>
                </>
                }
                {step === 2 &&
                <>
                    <div className='edit-photo-footer-item' onClick={() => handleChangeStep()} >Cancel</div>
                    <div className='edit-photo-footer-item' onClick={() => applyCrop()}>{loadingEdit ? 'Loading...' : 'Apply'}</div>
                </>
                }

            </div>

        </>
    );

}


function getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height,
    );

    // As Base64 string
    // const base64Image = canvas.toDataURL('image/jpeg');

    // As a blob
    return new Promise((resolve, reject) => {
        canvas.toBlob(blob => {
            blob.name = fileName;
            resolve(blob);
        }, 'image/jpeg', 1);
    });
}

export default EditPhoto
