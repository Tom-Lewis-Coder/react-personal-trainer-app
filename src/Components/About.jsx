import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { Header, Button } from '../Components'

const About = ({ title, className, pic, content }) => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      </p>
      <div className={className + '-divider'} />
    </div>
  )
}

export default About