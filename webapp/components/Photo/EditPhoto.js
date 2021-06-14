import React, { useRef, useState, useEffect, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import AvatarEditor from 'react-avatar-editor'
import 'cropperjs/dist/cropper.css'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

import { ArrowLeft, UploadImg } from '../StyledComponents/Icon'
import { Text } from '../StyledComponents/Text'
import { WrapperHeight } from '../StyledComponents/Wrapper'
import { modifySrc } from '../../utils/modifySrc'
import { TextArea } from '../controls/Input/Input'
import { CoverPhotoPreview } from './Photo'

const EditPhoto = ({
  handleBack,
  handleRotate,
  handleDelete,
  photo,
  keyPhoto,
  onChangePhotoDescription,
  hidedenDescription,
  loadingEdit,
}) => {
  const [step, setStep] = useState(0)
  const editorRef = useRef(null)
  const [rotateDeg, setRotateDeg] = useState(0)
  const [image, setImage] = useState({})
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const [croppedImageUrl, setCroppedImageUrl] = useState(null)
  const [blob, setBlob] = useState(null)
  // const [crop, setCrop] = useState({ aspect: 16 / 9 })
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)
  const [cropLoading, setCropLoading] = useState(false)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const editImage = photo.preview ? photo.preview : modifySrc(photo.photoUrl, 'offer')

  // let imageRef = useRef(null)

  const handleChangeStep = () => {
    if (step === 1 || step === 2) {
      setStep(0)
      return
    }
    handleBack()
  }

  useEffect(() => {
    let src = photo.preview ? photo.preview : modifySrc(photo.photoUrl)
    photo.src = src
    let img = new Image()
    img.src = src
    img.onload = function () {
      setWidth(this.width)
      setHeight(this.height)
      setImage(photo)
    }
  }, [])
  const rotateLeft = (e) => {
    e.preventDefault()
    setRotateDeg(rotateDeg - 90)
  }
  const rotateRight = (e) => {
    e.preventDefault()
    setRotateDeg(rotateDeg + 90)
  }
  const handlePositionChange = (e) => {}
  const applyRotate = () => {
    if (rotateDeg === 0) {
      handleBack()
      return
    }
    if (image) {
      const url = editorRef.current.getImageScaledToCanvas().toDataURL()
      editorRef.current.getImageScaledToCanvas().toBlob(
        function (blob) {
          // return blob;
          handleRotate(blob, url, keyPhoto)
        }.bind(this),
        'image/jpeg',
        1,
      )
    }
  }
  // const applyCrop = () => {
  //     handleRotate(blob, croppedImageUrl, keyPhoto)
  // }
  const applyCrop = useCallback(async () => {
    setCropLoading(true)
    try {
      const croppedImage = await getCroppedImg(editImage, croppedAreaPixels)
      console.log('donee', croppedImage)
      setCropLoading(false)
      handleRotate(croppedImage, croppedImage, keyPhoto)
    } catch (e) {
      console.error(e)
      setCropLoading(false)
    }
  }, [croppedAreaPixels])

  let styleCanvas = {
    width: width,
    height: height,
  }
  const styleImg = {
    width: '100%',
    height: '100%',
    background: `url(${image.src}) center center / contain no-repeat`,
    transform: `rotate(${rotateDeg}deg)`,
  }

  // const onChangeCrop = crop => {
  //     setCrop(crop);
  // };
  // const onCropComplete = crop => {
  //     makeClientCrop(crop);
  // };
  // const onImageLoaded = image => {
  //     // imageRef = image;
  // };

  // const makeClientCrop = async crop => {
  //     if (imageRef.current && crop.width && crop.height) {
  //         const croppedImageBlob = await getCroppedImg(
  //             imageRef.current.imageRef,
  //             crop,
  //             'newFile.jpeg'
  //         );
  //         setBlob(croppedImageBlob)
  //         let croppedImageUrl = window.URL.createObjectURL(croppedImageBlob);
  //         // window.URL.revokeObjectURL(this.fileUrl);
  //         setCroppedImageUrl(croppedImageUrl);
  //     }
  // }

  // const getCroppedImg = async (image, crop, fileName) => {
  //     const canvas = document.createElement('canvas');
  //     const scaleX = image.naturalWidth / image.width;
  //     const scaleY = image.naturalHeight / image.height;
  //     canvas.width = Math.ceil(crop.width*scaleX);
  //     canvas.height = Math.ceil(crop.height*scaleY);
  //     const ctx = canvas.getContext('2d');
  //
  //     console.log('ctx', ctx)
  //
  //
  //     ctx.drawImage(
  //         image,
  //         crop.x * scaleX,
  //         crop.y * scaleY,
  //         crop.width * scaleX,
  //         crop.height * scaleY,
  //         0,
  //         0,
  //         crop.width*scaleX,
  //         crop.height*scaleY
  //
  //     );
  //
  //     return new Promise((resolve, reject) => {
  //         canvas.toBlob(blob => {
  //             if (!blob) {
  //                 console.error('Canvas is empty');
  //                 return;
  //             }
  //
  //             blob.name = fileName;
  //             resolve(blob)
  //             // this.fileUrl = window.URL.createObjectURL(blob);
  //             // window.URL.revokeObjectURL(this.fileUrl);
  //             // resolve(this.fileUrl);
  //         }, 'image/jpeg');
  //     });
  // }

  return (
    <>
      <WrapperHeight>
        <div className={'z-photo-edit-header'}>
          {step !== 2 && (
            <div className="display-flex" onClick={() => handleChangeStep()}>
              <ArrowLeft mr={15} />
              <Text fz={14}>
                {step === 0 && <>Description</>}
                {step === 1 && <>Rotate photo</>}
                {step === 2 && <>Crop photo</>}
              </Text>
            </div>
          )}
          {step === 0 && (
            <div className="display-flex">
              <div className="edit-photo-сhange-item" onClick={() => setStep(1)}>
                rotate
              </div>
              <div className="edit-photo-сhange-item" onClick={() => setStep(2)}>
                crop
              </div>
            </div>
          )}
        </div>

        {step === 0 && (
          <>
            <CoverPhotoPreview
              src={photo.preview ? photo.preview : modifySrc(photo.photoUrl, 'offer')}
              mb={40}
            />

            {!hidedenDescription && (
              <TextArea
                name="describe"
                value={photo.description || ''}
                onChange={(e) => onChangePhotoDescription(photo.id, e.target.value)}
                height={90}
                count={photo.description ? photo.description.length : ''}
                maxLength={100}
                placeholder="Add a short description of the photo, explain it to potential Clients"
              />
            )}
          </>
        )}

        {step === 1 && (
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
        )}
        {step === 2 && (
          <>
            <div className="crop-container">
              <Cropper
                image={editImage}
                // image="https://thumbs.dreamstime.com/z/black-white-vertical-new-york-flatiron-building-stands-right-heart-manhattan-intersection-two-famous-nyc-landmarks-45486075.jpg"
                crop={crop}
                zoom={zoom}
                aspect={16 / 9}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>

            {/*<ReactCrop*/}
            {/*    ref={imageRef}*/}
            {/*    src={photo.preview ? photo.preview : modifySrc(photo.photoUrl, 'offer')}*/}
            {/*    crop={crop}*/}
            {/*    onImageLoaded={onImageLoaded}*/}
            {/*    onComplete={onCropComplete}*/}
            {/*    onChange={onChangeCrop}*/}
            {/*/>*/}

            {/*{croppedImageUrl && (*/}
            {/*    <div className="z-cropped-wrapper">*/}
            {/*        <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />*/}
            {/*    </div>*/}
            {/*)}*/}
          </>
        )}
      </WrapperHeight>

      <div className="edit-photo-footer">
        {step === 0 && (
          <>
            <div className="edit-photo-delete-item" onClick={() => handleDelete(keyPhoto)}>
              Delete this photo
            </div>
            {/*<div className='edit-photo-footer-item' onClick={() => handleDelete(keyPhoto)}>Delete this photo</div>*/}
          </>
        )}
        {step === 1 && (
          <>
            <div className="edit-photo-footer-item" onClick={(e) => rotateRight(e)}>
              Rotate
            </div>
            <div className="edit-photo-footer-item" onClick={() => applyRotate()}>
              {loadingEdit ? 'Loading...' : 'Apply'}
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="edit-photo-footer-item" onClick={() => handleChangeStep()}>
              Cancel
            </div>
            <div className="edit-photo-footer-item" onClick={() => applyCrop()}>
              {loadingEdit || cropLoading ? 'Loading...' : 'Apply'}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default EditPhoto

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

function getRadianAngle(degreeValue) {
  return (degreeValue * Math.PI) / 180
}

const getCroppedImg = async (imageSrc, pixelCrop, rotation = 0) => {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  const maxSize = Math.max(image.width, image.height)
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))

  // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context
  canvas.width = safeArea
  canvas.height = safeArea

  // translate canvas context to a central location on image to allow rotating around the center.
  ctx.translate(safeArea / 2, safeArea / 2)
  ctx.rotate(getRadianAngle(rotation))
  ctx.translate(-safeArea / 2, -safeArea / 2)

  // draw rotated image and store data.
  ctx.drawImage(image, safeArea / 2 - image.width * 0.5, safeArea / 2 - image.height * 0.5)
  const data = ctx.getImageData(0, 0, safeArea, safeArea)

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  // paste generated rotate image with correct offsets for x,y crop values.
  ctx.putImageData(
    data,
    0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x,
    0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y,
  )

  // As Base64 string
  // return canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve) => {
    canvas.toBlob((file) => {
      resolve(file, URL.createObjectURL(file))
    }, 'image/jpeg')
  })
}
