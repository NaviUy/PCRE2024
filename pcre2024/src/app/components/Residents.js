'use client'

import {useEffect, useState} from 'react'
import {urlFor} from '../../sanity/client'
import BlockContent from '@sanity/block-content-to-react'
import {useNavbar} from '../components/NavbarContext.js'

const Residents = ({residentsData}) => {
  const [enable, setEnable] = useState(false)
  const [residents, setResidents] = useState([])
  const {addToNav, removeFromNav} = useNavbar()

  useEffect(() => {
    if (residentsData?.enable) {
      if (residentsData?.residents) {
        let enabledResidents = residentsData.residents.filter((resident) => resident.enable)
        setResidents(enabledResidents)
      }
      if (residents.length > 0) {
        setEnable(true)
      } else {
        setEnable(false)
      }
    }
  }, [residentsData])
  useEffect(() => {
    if(enable){
      addToNav({label: "Residents", href: "#residents"})
    } else{
        removeFromNav({label: "Residents"})
    }
  }, [enable])
  if (!enable) return null
  return (
    enable && (
      <section className="w-screen bg-[#022851]" id="residents">
        <div className="w-full p-4 pt-8 flex flex-col">
          <h1 className="text-4xl text-white">{residentsData?.title}</h1>
          <div className="flex flex-col gap-4 md:gap-6 mt-4 md:m-4 md:grid md:grid-cols-2 xl:grid-cols-3 md:flex-wrap">
            {residents.map((resident, index) => (
              <div className="p-4 bg-white text-black flex flex-col md:flex-row" key={index}>
                <div className="min-w-[100px] h-[100px] self-center">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={urlFor(resident.image).url()}
                    alt={resident.name}
                  />
                </div>
                <div className="mt-4 flex flex-col md:flex-grow md:ml-8">
                  <h3 className="text-lg self-center font-bold text-center">{resident.name}</h3>
                  <div className="self-center w-full">
                    <p className="text-center text-xs text-gray-500">{resident.school}</p>
                    <div className="text-xs text-black mt-8 md:mt-4">
                      <BlockContent
                        blocks={resident.bio}
                        projectId="wjh43571"
                        dataset="production"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  )
}

export default Residents
