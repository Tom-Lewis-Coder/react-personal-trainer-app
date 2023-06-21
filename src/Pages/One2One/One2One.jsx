import React, { useEffect } from 'react'
import { Services } from '../../Components';
import pic from '../../Assets/TSLimg121.jpg'

import './One2One.scss'

const One2One = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let content = ['Arabica Acerbic Affogato Aftertaste Aged Americano And Aroma, bar panna so Barista cortado trifecta extraction,skinny aftertaste filter java cultivar cinnamon.', <br />, <br />, 'Mazagran trade Barista french and Acerbic acerbic Aged milk cinnamon origin carajillo, mountain coffee roast mug wings Bar singleviennese pumpkin go pot, dripper crema flavour mocha At bar sit medium au breve.Espresso Brewed Blue iced Americano robust whipped, bar percolator grounds go saucer robusta, Au shop Affogato Bar aged coffee, Barista blue strong origin aftertaste. Blue skinny coffee breve Brewed acerbic, siphon steamed And foam, qui Arabica ut latte.', <br />, <br />, 'Go brewed At aftertaste sweet cinnamon caffeine rich strong caramelization Aftertaste, Body roast body frappuccino Beans extraction sit americano Aroma.']

  return (
    <>
      <Services title={'121 Training'} pic={pic} className={'app__one2one'} content={content} />
    </>
  )
}

export default One2One
