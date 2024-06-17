'use client'

import {useEffect, useState} from 'react'

const AgendaLines = ({agenda}) => {
  const [enable, setEnable] = useState(false)
  const [agendaLines, setAgendaLines] = useState([])

  useEffect(() => {
    if (agenda) {
      const enabledAgendasLines = agenda.filter((agendaLine) => agendaLine.enable)
      if(enabledAgendasLines?.length > 0){
        setEnable(true)
        setAgendaLines(enabledAgendasLines)
      } else {
        setEnable(false)
      }
    }
  }, [agenda])

  return (
    enable &&
    <div>
      {agendaLines.map((item, index) => {
        if (item.blocker) {
          return (
            <div className="w-full bg-white opacity-50 text-black" key={index}>
              <div className="mx-4 flex justify-center gap-4">
                <h3 className="font-semibold">{item.time}</h3>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
            </div>
          )
        } else {
          return (
            <div className="w-full bg-white text-black" key={index}>
              <div className="m-4 p-4 flex gap-4">
                <h3 className="font-semibold min-w-[50px]">{item.time}</h3>
                <div className="flex flex-col border-l-2 pl-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  {item.description && (
                    <div className="mt-2 text-xs text-gray-500">{item.description}</div>
                  )}
                </div>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default AgendaLines
