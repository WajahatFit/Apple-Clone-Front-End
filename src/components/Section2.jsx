import React from 'react'
import repairSvg from '../images/undraw_bug_fixing_oc-7-a.svg'
import guarantee from '../images/undraw_terms_re_6ak4.svg'
import devices from '../images/undraw_devices_re_dxae.svg'

export default function Section2() {
  return (
      <div className='bg-gradient-to-t from-indigo-600 via-indigo-500 to-indigo-80'>
          <section>
        <div className='max-w-6xl px-5 mx-auto mt-28 pb-10 text-center'>
          <h2 className='hidden text-4xl font-bold text-center md:flex flex-row justify-center items-center'>What Do We Offer To Our Clients</h2>
          <div className="flex flex-col items-center mt-24 md:flex-row md:space-x-6">
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <img src={repairSvg} alt='devices' className='' />
              <h5 className="text-lg font-bold">Express Repair</h5>
              <p className="text-sm text-darkGrayishBlue">We have Rapid Repair Service.
              We tend to have your device repaired in 1 hour maximum thanks to our Express Service.</p>
            </div>
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <img src={devices} alt='devices'  className="mt-8"/>
              <h5 className="text-lg font-bold md:pt-14">New Devices Available</h5>
              <p className="text-sm text-darkGrayishBlue">Every 3 months we get our new items from our offical provider Apple that aren't in sale yet. We are the only one who has the Apple product for sale even before Apple does. </p>
            </div>
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <img src={guarantee} alt='devices' className="w-3/4" />
              <h5 className="text-lg font-bold">Guarantee</h5>
              <p className="text-sm text-darkGrayishBlue">We provide a formal assurance, especially that certain conditions will be fulfilled on all of products bought on our website. We also provide free Apple care plan for all those clients bought a Apple product from Orange Store.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
