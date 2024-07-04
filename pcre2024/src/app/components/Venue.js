"use client"
import { useState, useEffect } from "react"
import { useNavbar } from "./NavbarContext"
import { getVenue, urlFor } from "@/sanity/client"
import Image from "next/image"

const Venue = () => {
    const [venueData, setVenueData] = useState(null);
    const [enable, setEnable] = useState(false)
    const {addToNav, removeFromNav} = useNavbar()
    const [venue, setVenue] = useState({})

    useEffect(() => {
        getVenue().then((data) => {
            let newData = data[0]
            newData.imageUrl = urlFor(newData.image).url()
            setVenueData(newData)
        }).catch(console.error)
    }, [])

    useEffect(() => {
        if(venueData?.enable){
            setVenue(venueData)
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
          <div className='absolute p-4 z-20 h-[500px] w-full flex flex-col justify-end'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-white text-4xl text-right'>Venue</h2>
              <div className='h-[10px] w-[80px] self-end bg-[#FFBF00]'></div>
              <h3 className='text-white text-2xl text-right'>{ venue?.title }</h3>
            </div>
          </div>
          <div>
            <div className='h-[500px] w-full bg-black absolute opacity-30 z-10'></div>
            <Image className="absolute w-full h-[500px] object-cover z-0" src={venue.imageUrl} alt={venue?.image.alt} height={500} width={1000} placeholder="blur" blurDataURL={venue?.image?.asset?.metadata?.lqip}></Image>
          </div>
        </div>
      </section>
    )
};

export default Venue;