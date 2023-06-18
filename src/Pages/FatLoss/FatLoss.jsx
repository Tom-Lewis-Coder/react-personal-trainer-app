import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { Header, Button } from '../../Components';
import pic from '../../Assets/TSLimggroup.jpg'

import './FatLoss.scss'

const FatLoss = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='app__fatLoss-container'>
      <div className='app__fatLoss-back'>
        <Button onClick={goBack} title={'Back'} className={'app__fatLoss-backbutton'} />
      </div>
      <img src={pic} alt='img' className='app__fatLoss-img' />
      <Header title={'Fat Loss'} className={'app__fatLoss-title'} />
      <div className='app__fatLoss-divider' />
      <p className='app__fatLoss-content'>
        Arabica Acerbic Affogato Aftertaste
        Aged Americano And Aroma, bar panna so Barista cortado trifecta extraction,
        skinny aftertaste filter java cultivar cinnamon. Mazagran trade Barista french and Acerbic acerbic
        Aged milk cinnamon origin carajillo, mountain coffee roast mug wings Bar single
        viennese pumpkin go pot, dripper crema flavour mocha At bar sit medium au breve.<br /><br />
        Espresso Brewed Blue iced Americano robust whipped, bar percolator  grounds go saucer robusta,
        Au shop Affogato Bar aged coffee, Barista blue strong origin aftertaste.
        Blue skinny coffee breve Brewed acerbic, siphon steamed And foam, qui Arabica ut latte.
        Go brewed At aftertaste sweet cinnamon caffeine rich strong caramelization Aftertaste,
        Body roast body frappuccino Beans extraction sit americano Aroma.
      </p>
      <div className='app__fatLoss-divider' />
    </div>
  )
}

export default FatLoss