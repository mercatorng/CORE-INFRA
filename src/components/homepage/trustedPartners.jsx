import React, { useRef } from 'react'
import jaizBankLogo from '../../../src/assets/jaizBankLogo.png'
import titanLogo from '../../assets/homePage/titan-logo-box 2.png'
import keystonelogo from '../../assets/homePage/Group 45.png'
import providusLogo from '../../assets/homePage/main-logo 2.png'
import { useScrollVisibility } from '../../hooks/useScrollHook'
import AnimatedContent from '../animatedContent'

export const TrustedPartners = () => {
  const headerContentRef = useRef(null);
      const { isVisible: headerContentContainer } =
        useScrollVisibility(headerContentRef);
  return (
    <AnimatedContent isVisible={headerContentContainer}>
    <div className='p-11 max-w-[1120px] mx-auto text-center' ref={headerContentRef}>
        <h1 className="text-2xl font-bold">Our Trusted Partners</h1>
        <div className="grid items-center grid-cols-2 gap-8 mt-8 md:grid-cols-4">
            <img src={jaizBankLogo} alt="Jaiz Bank"  />
            <img src={titanLogo} alt="Titan Bank"  />
            <img src={keystonelogo} alt="Jaiz Bank"  />
            <img src={providusLogo} alt="Keystone Bank"  />
        </div>
    </div>
    </AnimatedContent>
  )
}
