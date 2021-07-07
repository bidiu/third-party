import { Div, Paragraph } from '@archon/showroom-extensions'
import * as React from 'react'
import bannerImage from './banner-bkg.jpg'

interface Props {
  text: string
}

export const Banner: React.FunctionComponent<Props> = props => {
  const { text } = props
  const [fontSize, setFontSize] = React.useState(48)
  const [height, setHeight] = React.useState(640)

  React.useEffect(() => {
    setTimeout(() => {
      setFontSize(28)
      setHeight(60)
    }, 4000)
  }, [])

  const containerStyle: React.CSSProperties = {
    backgroundColor: '#d6dab9',
    width: '100%',
    height: `${height}px`,
    backgroundImage: `url("${bannerImage}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    transition: '1s',
    position: 'relative',
  }

  const textStyle: React.CSSProperties = {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: `${fontSize}px`,
    transition: '1s',
    margin: 0,
    padding: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#00000022',
  }

  return (
    <Div style={containerStyle}>
      <Div style={overlayStyle} />
      <Paragraph style={textStyle}>{text}</Paragraph>
    </Div>
  )
}
