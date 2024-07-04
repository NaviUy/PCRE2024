"use client"
import { useState, useEffect } from "react"
import { useNavbar } from "./NavbarContext"

const Venue = (venueData) => {
    const [enable, setEnable] = useState(false)
    const {addToNav, removeFromNav} = useNavbar()
    const [venue, setVenue] = useState({})

    useEffect(() => {
        if(venueData?.venueData?.enable){
            setVenue(venueData.venueData)
            setEnable(true)
        } else {
            setEnable(false)
        }
    }, [venueData])

    useEffect(() => {
        if(enable){
            addToNav({label: "Venue", href: "#venue"})
        } else {
            removeFromNav({label: "Venue"})
        }
    }, [enable])

    return (
        enable &&
        <section className="w-screen bg-[#022851] py-8" id="venue">
        <div className='h-[500px]'>
          <div className='absolute p-4 z-10 h-[500px] w-full flex flex-col justify-end'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-white text-4xl text-right'>Venue</h2>
              <div className='h-[10px] w-[80px] self-end bg-[#022951]'></div>
              <h3 className='text-white text-2xl text-right'>{ venue?.title }</h3>
            </div>
          </div>
          <div>
            <div className='h-[500px] w-full bg-black absolute opacity-30 z-0'></div>
            <img className='h-[500px] w-full object-cover' src={venue?.imageUrl} alt={venue?.image.alt}></img>
          </div>
        </div>
      </section>
    )
};

export default Venue;