'use client'

import {useEffect, useState} from 'react'
import {urlFor} from '../../sanity/client'

const SpeakerCard = ({speakerData}) => {
  const [enabledSpeakers, setEnabledSpeakers] = useState([])

  useEffect(() => {
    const enabledSpeakers = speakerData?.filter((speaker) => speaker.enable)
    if (enabledSpeakers.length > 0) {
      setEnabledSpeakers(enabledSpeakers)
    }
  }, [speakerData])
  return (
    <>
      {enabledSpeakers.map((speaker, index) => (
        <div className="p-4 bg-white text-black flex flex-col" key={index}>
          <div className="w-[100px] h-[100px] self-center">
            <img
              className="w-full h-full object-cover rounded-full"
              src={urlFor(speaker.image).url()}
              alt={speaker.name}
            />
          </div>
          <div className="mt-4 flex flex-col">
            <h3 className="text-lg self-center font-bold text-center">{speaker.name}</h3>
            <div className="self-center">
              <p className="text-xs text-gray-500 text-center">{speaker.school}</p>
              <p className="text-xs text-gray-500 text-center">{speaker.subtitle}</p>
            </div>
            <p className="text-sm mt-4">{speaker.bio}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default SpeakerCard
