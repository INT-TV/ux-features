const iframeProps = {
  frameBorder: '0',
  allow: 'autoplay; encrypted-media',
  title: 'video'
}

const YoutubeFrame = (props) => {
  const { src } = props

  return (
    <iframe
      src={src}
      frameBorder={iframeProps.frameBorder}
      allow={iframeProps.allow}
      allowFullScreen
      title={iframeProps.title}
    />
  )
}

export default YoutubeFrame
