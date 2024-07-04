"use client"

import { useEffect, useState } from 'react'
import MemberCard from './MemberCard'
import {useNavbar} from '../components/NavbarContext.js'


const Organizers = ({organizers}) => {
    const [oragnizers, setOranizers] = useState([])
    const [enabledOrganizers, setEnabledOrganizers] = useState([])
    const [enable, setEnable] = useState(false)
    const {addToNav, removeFromNav} = useNavbar()

    useEffect(() => {
        if(organizers?.enable){
            setOranizers(organizers)
            let enabledOrganizers = organizers?.members?.filter((organizer) => organizer.enable)
            if(enabledOrganizers?.length > 0){
                setEnabledOrganizers(enabledOrganizers)
            }
            setEnable(true)
        } else {
            setEnable(false)
        }
    }, [organizers])
    useEffect(() => {
        if(enable){
            addToNav({label: "Organizers", href: "#organizers"})
        } else {
            removeFromNav({label: "Organizers"})
        }
    }, [enable])
    if(!enable) return null
    return (
        enable &&
        <section className="w-screen bg-[#022851]" id="organizers">
        <div className="w-full p-4 pt-8 flex flex-col">
          <h1 className="text-4xl text-white md:text-center">{oragnizers?.title}</h1>
          <p className="text-sm mt-4 md:text-center md:max-w-[500px] self-center text-white">
            {oragnizers?.description}
          </p>
          <div className="flex flex-col gap-4 md:gap-6 mt-4 md:m-4 md:mt-8 md:grid md:grid-cols-2 xl:grid-cols-3 md:flex-wrap">
            {enabledOrganizers.map((member, index) => (
              <MemberCard member={member} key={index} />
            ))}
          </div>
        </div>
      </section>

    )
}
export default Organizers