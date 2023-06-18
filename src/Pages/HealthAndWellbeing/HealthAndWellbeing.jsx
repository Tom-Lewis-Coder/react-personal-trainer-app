import React from 'react'
import { About } from '../../Components';
import pic from '../../Assets/TSLimg121.jpg'

import './HealthAndWellbeing.scss'

const HealthAndWellbeing = () => {

  let content = ['Arabica Acerbic Affogato Aftertaste Aged Americano And Aroma, bar panna so Barista cortado trifecta extraction,skinny aftertaste filter java cultivar cinnamon.', <br/>, <br/>, 'Mazagran trade Barista french and Acerbic acerbic Aged milk cinnamon origin carajillo, mountain coffee roast mug wings Bar singleviennese pumpkin go pot, dripper crema flavour mocha At bar sit medium au breve.Espresso Brewed Blue iced Americano robust whipped, bar percolator grounds go saucer robusta, Au shop Affogato Bar aged coffee, Barista blue strong origin aftertaste. Blue skinny coffee breve Brewed acerbic, siphon steamed And foam, qui Arabica ut latte.', <br/>, <br/>, 'Go brewed At aftertaste sweet cinnamon caffeine rich strong caramelization Aftertaste, Body roast body frappuccino Beans extraction sit americano Aroma.']

  return (
    <>
      <About title={'Health and Wellbeing'} pic={pic} className={'app__healthAndWellbeing'} content={content}/>
    </>
  )
}

export default HealthAndWellbeing