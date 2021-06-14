import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styled, { css } from 'styled-components'
import Quagga from 'quagga'
import lipton from './lipton.jpeg'

export const Scanner = ({ onClose }) => {
  const [result, setResult] = useState(null)
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState(0)
  const [product, setProduct] = useState({
    // id: '234324',
    // name: '234324',
    // barcode: '23123',
  })

  useEffect(() => {
    Quagga.init(
        {
          inputStream: {
            type: 'LiveStream',
            constraints: {
              width: 640,
              height: 480,
              facingMode: 'environment', // or user
            },
          },
          locator: {
            patchSize: 'medium',
            halfSample: true,
          },
          numOfWorkers: 4,
          decoder: {
            readers: [
              // 'code_128_reader',
              'ean_reader',
              // 'ean_8_reader',
              // 'code_39_reader',
              // 'code_39_vin_reader',
              // 'codabar_reader',
              // 'upc_reader',
              // 'upc_e_reader',
              // 'i2of5_reader',
              // '2of5_reader',
              // 'code_93_reader',
            ],
          },
          locate: true,
        },

        function (err) {
          if (err) {
            return console.log(err)
          }
          Quagga.start()
        },
    )
    Quagga.onDetected(onDetected)

    Quagga.onProcessed(function(result) {
      var drawingCtx = Quagga.canvas.ctx.overlay,
          drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
          result.boxes.filter(function (box) {
            return box !== result.box;
          }).forEach(function (box) {
            Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
          });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
        }
      }
    });

    return () => {
      Quagga.offDetected(onDetected)
    }
  }, [])

  useEffect(() => {
    setCount(0)
    setIsActive(false)
  }, [result])

  useEffect(() => {
    // console.log('count', count)
    if (result && count > 10 && !product.id) {
      getProduct(result)
    }
  }, [count])

  const getProduct = (barcode) => {
    if (isLoading) return

    setIsLoading(true)
    setIsActive(true)

    setTimeout(() => {
      let product = {
        id: '234324',
        name: 'Чай черный "Липтон" 50пак.',
        barcode: '4605922006701',
        image: lipton
      }
      setProduct(product)
      setCount(0)
      setTimeout(() => {
        setProduct({})
      }, 3000)
      setIsLoading(false)
    }, 1000)
  }

  let timeout = null
  const onDetected = (result) => {
    // setIsActive(true)
    // if (timeout) clearTimeout(timeout)
    // timeout = setTimeout(() => {
    //   setIsActive(false)
    // }, 1000)

    setCount((c) => c + 1)

    // console.log(result.codeResult.code)
    setResult(result.codeResult.code)
  }

  return (
      <Wrapper>
        <Box>
          <Title onClick={() => setCount((c) => c + 1)}>Отсканируйте шрих-код:</Title>

          <ScannerWrapper>
            {/*<Frame>*/}
            {/*  <TopLeft isActive={isActive} />*/}
            {/*  <TopRight isActive={isActive} />*/}
            {/*  <BottomRight isActive={isActive} />*/}
            {/*  <BottomLeft isActive={isActive} />*/}
            {/*</Frame>*/}
            <div id="interactive" className="viewport" />
          </ScannerWrapper>

          {isLoading && <div>Поиск {result} ...</div>}

          {product.id && (
              <NotifBox>
                <Label>Товар добавлен в пречек</Label>
                <Product>
                  <ProductLogo src={product.image} />
                  <WrapInfoList>
                    <ProductName>{product.name}</ProductName>
                    <ProductCode> {product.barcode}</ProductCode>
                  </WrapInfoList>
                </Product>
              </NotifBox>
          )}

          {/*<ProductCode>{result}</ProductCode>*/}
        </Box>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  //background: url(${(p) => (p.url ? p.url : null)});
  //background-size: cover;
  width: 100%;
  min-height: 100vh;
  border-radius: 0;
  padding: 0;
`
const Box = styled.div`
  //margin-top: 20px;
  padding: 0 5%;
  position: relative;
  width: 100%;
  text-align: center;
`
const ScannerWrapper = styled.div`
  position: relative;

  video {
    // width: 320px;
    // max-width: 320px;
    // height: 200px;
   
    max-width: 100%;
    width: 100%;
    object-fit: contain;
    border: 1px solid black;
  }

  canvas {
    // width: 320px;
    // max-width: 320px;
    // height: 200px;
  
  
    max-width: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
`
const HMobile = styled.div`
  padding: 5%;
`
const Title = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  color: #000000;
`
// const ProductCode = styled.div`
//   font-size: 14px;
//   margin-top: 20px;
// `
const Frame = styled.div`
  position: absolute;
  
  // width: 320px;
  // max-width: 320px;
  // height: 200px;
  
  width: 100%;
  height: 100%;
  
 
  
  top: 0;
  left: 0;
`
const commonStyles = css`
  position: absolute;
  //margin: 10px;
  height: 20px;
  width: 20px;
`
const TopLeft = styled.div`
  ${commonStyles};
  top: 60px;
  left: 40px;
  border-top: solid ${(p) => (p.isActive ? 'green' : 'red')} 4px;
  border-left: solid ${(p) => (p.isActive ? 'green' : 'red')} 4px;
`
const TopRight = styled.div`
  ${commonStyles};
  top: 60px;
  right: 40px;
  border-top: solid ${(p) => (p.isActive ? 'green' : 'red')} 4px;
  border-right: solid ${(p) => (p.isActive ? 'green' : 'red')} 4px;
`
const BottomRight = styled.div`
  ${commonStyles};
  bottom: 60px;
  right: 40px;
  border-bottom: solid ${(p) => (p.isActive ? 'green' : 'red')} 4px;
  border-right: solid ${(p) => (p.isActive ? 'green' : 'red')} 4px;
`
const BottomLeft = styled.div`
  ${commonStyles};
  bottom: 60px;
  left: 40px;
  border-bottom: solid ${(p) => (p.isActive ? 'green' : 'red')} 4px;
  border-left: solid ${(p) => (p.isActive ? 'green' : 'red')} 4px;
`
const Product = styled.div`
  display: flex;
  align-items: center;
  box-shadow: var(--shadow-card);
  padding: 10px;
  border-radius: 20px;
`
const ProductLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 20px;
`
const WrapInfoList = styled.div`
  text-align: left;
`
const ProductName = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`
const ProductCode = styled.div`
  font-size: 13px;
  color: #6d82a3;
`
const Label = styled.div`
  font-size: 13px;
  color: rgba(0, 0, 255, 0.72);
  padding-bottom: 5px;
`
const NotifBox = styled.div`
  position: absolute;
  width: 90%;
  bottom: -100px;

  @keyframes move {
    from {
     bottom: -300px;
    }
    to {
      bottom: -100px;
    }
  }
  animation: move 500ms linear;
`
