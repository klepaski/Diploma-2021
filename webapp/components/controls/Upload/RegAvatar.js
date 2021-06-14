import React from 'react';
import Dropzone from 'react-dropzone'
import AvatarEditor from 'react-avatar-editor'


import {UploadImg, IcAvatar} from '../../StyledComponents/Icon'
import {Text} from "../../StyledComponents/Text";

import './styles.css'
import {Button} from "../Button/Button";
import IconRotateRight from '../../../static/img/icon-rotate-right.png'

export default class RegAvatar extends React.Component {
    getImage = () => {
        if(this.state.image) {
            this.editor.getImageScaledToCanvas().toBlob(function (blob) {
                return blob;
            }.bind(this), 'image/jpeg', 1);
        }
    }
    handleSave = data => {
        const img = this.editor.getImageScaledToCanvas().toDataURL()
        const rect = this.editor.getCroppingRect()

        this.setState({
            preview: {
                img,
                rect,
                scale: this.state.scale,
                width: this.state.width,
                height: this.state.height,
                borderRadius: this.state.borderRadius
            }
        })
    }
    handleScale = e => {
        const scale = parseFloat(e.target.value)
        this.setState({ scale })
    }
    handleAllowZoomOut = ({ target: { checked: allowZoomOut } }) => {
        this.setState({ allowZoomOut })
    }
    rotateLeft = e => {
        e.preventDefault()

        this.setState({
            rotate: this.state.rotate - 90
        })
    }
    rotateRight = e => {
        e.preventDefault()
        this.setState({
            rotate: this.state.rotate + 90
        })
    }
    handleBorderRadius = e => {
        const borderRadius = parseInt(e.target.value)
        this.setState({ borderRadius })
    }
    handleXPosition = e => {
        const x = parseFloat(e.target.value)
        this.setState({ position: { ...this.state.position, x } })
    }
    handleYPosition = e => {
        const y = parseFloat(e.target.value)
        this.setState({ position: { ...this.state.position, y } })
    }
    handleWidth = e => {
        const width = parseInt(e.target.value)
        this.setState({ width })
    }
    handleHeight = e => {
        const height = parseInt(e.target.value)
        this.setState({ height })
    }
    setEditorRef = editor => {
        if (editor) this.editor = editor
    }
    handlePositionChange = position => {
        this.setState({ position })
    }
    handleNewImage = e => {
        this.setState({ image: e.target.files[0] })
    }

    constructor(props) {
        super(props);
        this.state = {
            allowZoomOut: false,
            positiD: { x: 0.5, y: 0.5 },
            scale: 1,
            rotate: 0,
            borderRadius: 256,
            preview: null,
            width: 512,
            height: 512
        };

        this.onCrop = this.onCrop.bind(this)
        this.onCropDefault = this.onCropDefault.bind(this)
        this.onCloseDefault = this.onCloseDefault.bind(this)
    }

    onDrop(accepted, rejected) {
        if (accepted.length) {
            this.setState({image: accepted[0]});
            this.handleScale({target:{value:'1.01'}})
        }
        if (rejected.length) {
            console.log('rejected')
            this.setState({fileError: 'The uploaded file seems to have incorrect format'})
        }
    }

    onCropDefault(preview) {
        this.setState({defaultPreview: preview, newAvatar: true})

        let binary = atob(preview.split(',')[1]);
        let array = [];
        for(let i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        let img =  new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
        this.setState({avatar: img})
    }

    onCrop(preview) {
        this.setState({preview})
    }

    onCloseDefault() {
        this.setState({defaultPreview: null, newAvatar: false, preview: null})
    }

    logCallback (e) {
        if(e === 'onLoadSuccess' && this.props.onLoadSuccess) this.props.onLoadSuccess()
    }

    render() {
        let {
            profilePhotoURL
        } = this.props
        let image = this.state.image;

        const dropStyle = {
            'width': '100%',
            'height': 'auto',
            'margin': '0 auto',
            'border': 'none',
            'display':'table'
        }

        let styleCanvas = {
            'width': '240px',
            'height': '240px',
        }

        function ActionLink() {
            document.getElementById('input_load_file_2').click();
        }

        return (
            <React.Fragment>

                {/* default state. No photo */}
                {!image &&
                <div className="shell-load-img-cart">
                    <div className="block-load-img">
                        <section className="section-wrap-upload">
                            {profilePhotoURL ?
                                <img src={profilePhotoURL} alt='logo' />
                                :
                                <IcAvatar />
                            }
                        </section>
                    </div>
                </div>
                }


                {/*Image is chosen*/}
                {image &&
                <React.Fragment>
                    <div className="wrap-canvas-avatar">
                        <AvatarEditor
                            ref={this.setEditorRef}
                            scale={parseFloat(this.state.scale)}
                            width={this.state.width}
                            height={this.state.height}
                            position={this.state.position}
                            onPositionChange={this.handlePositionChange}
                            rotate={parseFloat(this.state.rotate)}
                            borderRadius={this.state.borderRadius}
                            onSave={this.handleSave}
                            onLoadFailure={this.logCallback.bind(this, 'onLoadFailed')}
                            onLoadSuccess={this.logCallback.bind(this, 'onLoadSuccess')}
                            onImageReady={this.logCallback.bind(this, 'onImageReady')}
                            onImageLoad={this.logCallback.bind(this, 'onImageLoad')}
                            onDropFile={this.logCallback.bind(this, 'onDropFile')}
                            color={[0, 0, 0, 0.8]}
                            style={styleCanvas}
                            image={this.state.image || UploadImg}
                        />
                    </div>

                    <div className={'zoom-inp'}>
                        <input
                            name='scale'
                            type='range'
                            onChange={this.handleScale}
                            min={this.state.allowZoomOut ? '0.1' : '1'}
                            max='4'
                            step='0.01'
                            defaultValue='1'
                        />
                    </div>


                    <div style={{textAlign: 'center', marginBottom: '10px'}}>
                        <img style={{width: '15px'}} src={IconRotateRight} alt="rotate" onClick={(e) => this.rotateRight(e)}/>
                    </div>
                    {/*<div onClick={(e) => this.rotateRight(e)}>Right</div>*/}
                </React.Fragment>
                }

                <Text fz={14} mb={30} grey6 >
                    Clear high-quality frontal face photos are very
                    important so programmers and clients could learn about each other.
                    Make sure the photo doesn’t include any personal or sensitive information you woudn’t like others to see.
                </Text>

                <Dropzone accept="image/jpeg, image/png, image/gif" onDrop={this.onDrop.bind(this)}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <Button transparent >Upload a photo</Button>
                            </div>
                        </section>
                    )}
                </Dropzone>

            </React.Fragment>

        );
    }
}
