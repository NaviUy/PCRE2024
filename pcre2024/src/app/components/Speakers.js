"use client"

import { useEffect, useState } from 'react'
import SpeakerCard from './SpeakerCard'
import {useNavbar} from '../components/NavbarContext.js'


const Speakers = ({speakerData}) => {
    const [enable, setEnable] = useState(false)
    const [enabledSpeakerData, setEnabledSpeakerData] = useState([])
    const {addToNav, removeFromNav} = useNavbar()

    useEffect(() => {
        const enabledSpeakerData = speakerData?.filter((speaker) => speaker.enable)
        if(enabledSpeakerData.length > 0){
            setEnabledSpeakerData(enabledSpeakerData)
            setEnable(true)
        } else {
            setEnable(false)
        }
    }, [speakerData])

    useEffect(() => {
        if(enable){
            addToNav({label: "Speakers", href: "#speakers"})
        } else {
            removeFromNav({label: "Speakers"})
        }
    }, [enable])

    if(!enable) return null
    return (
        enable &&
        <section className="w-screen bg-[#022851]" id="speakers">
        <div className="w-full p-4 pt-8 flex flex-col">
          <h1 className="text-4xl">Speakers</h1>
          <div className="mt-4 md:m-4">
            {enabledSpeakerData.map((item, index) => (
              <div className="mt-4 md:mt-10" key={index}>
                <h2 className="text-xl">{item.title}</h2>
                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:flex-wrap mt-4">
                  <SpeakerCard speakerData={item.speakers} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
export default Speakers