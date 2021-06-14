import React from 'react'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import { device } from '../../../lib/mediaDevice'
import { StyledButton, Button } from '../Button/Button'
import { Text } from '../../StyledComponents/Text'

const Wrapper = styled.div`
  text-align: center;
  color: #a7a7a7;
  border: 1px dashed ${(props) => (props.isDragActive ? '#00C874' : '#979797')};
  border-radius: 6px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${StyledButton} {
    width: 50%;
    margin: 0 auto 20px auto;
  }

  ${Text} {
    color: #a7a7a8;
  }

  @media ${device.laptopDesktop} {
    border-width: 2px;
    margin: 2px;

    ${StyledButton} {
      width: 30%;
    }
  }
`

export default function Dropzone({ onDropProp }) {
  // const onDrop = useCallback(acceptedFiles => {
  //     onDropProp(acceptedFiles)
  // }, [])
  // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      let files = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      )
      onDropProp(files)
    },
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        <Wrapper isDragActive={!!isDragActive}>
          <Button mb={20} blue>
            Upload photos
          </Button>
          <Text textCenter grey6 fz={16}>
            Drop the photos right here. <br />
            One by one or all together at a time.
          </Text>
        </Wrapper>
      }
    </div>
  )
}
