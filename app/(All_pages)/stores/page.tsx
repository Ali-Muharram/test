import React, { Children } from 'react'
import Navigator from '../../_components/navigator/navigator'
import Markets_comp from './makets_comp'

export default function page() {




  return (

    <>
      <Navigator title={"كل المتاجر"} target={" /  كل المتاجر  "} />

      <Markets_comp />

    </>
  )
}




