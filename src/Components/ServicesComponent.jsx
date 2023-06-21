import React from 'react'
import { useNavigate } from 'react-router';
import { Header, Button } from '.'

const ServicesComponent = ({ title, className, pic, content, content1, content2 }) => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
      <div className={className + '-container'}>
        <div className={className + '-back'}>
          <Button onClick={goBack} title={'Back'} className={className + '-backbutton'} />
        </div>
        <img src={pic} alt='img' className={className + '-img'} />
        <Header title={title} className={className + '-title'} />
        <div className={className + '-divider'} />
        <p className={className + '-content'}>
          {content}
          <br/><br/>
          {content1}
          <br/><br/>
          {content2}
        </p>
        <div className={className + '-divider'} />
      </div>
  )
}

export default ServicesComponent