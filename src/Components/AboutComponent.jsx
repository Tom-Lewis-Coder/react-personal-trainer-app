import React from 'react'
import { useNavigate } from 'react-router';
import { Header, Button } from '.'

const AboutComponent = ({ title, className, pic, content }) => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  const contentSplit = content.map((para, i) => {
    return <p className={className + '-content'} key={i} >{para}</p>
  })

  return (
    <div className={className + '-container'}>
      <div className={className + '-back'}>
        <Button onClick={goBack} title={'Back'} className={className + '-backbutton'} />
      </div>
      <img src={pic} alt='img' className={className + '-img'} />
      <Header title={title} className={className + '-title'} />
      <div className={className + '-divider'} />
      {contentSplit}
      <div className={className + '-divider'} />
    </div>
  )
}

export default AboutComponent