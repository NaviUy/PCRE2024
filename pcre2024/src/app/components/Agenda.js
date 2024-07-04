'use client'

import { useEffect, useState } from "react"
import AgendaLines from "./AgendaLines"
import {useNavbar} from '../components/NavbarContext.js'
import { getAgenda } from '@/sanity/client'

const Agenda = () => {
  const [agendaData, setAgendaData] = useState(null)
  const [enable, setEnable] = useState(false)
  const [enabledAgendas, setEnabledAgendas] = useState([])
  const {addToNav, removeFromNav} = useNavbar()

  useEffect(() => {
    getAgenda().then(setAgendaData).catch(console.error)
  }, [])

  useEffect(() =>{
    const enabledAgendas = agendaData?.filter((agenda) => agenda.enable)
    if(enabledAgendas?.length > 0){
      setEnabledAgendas(enabledAgendas)
      setEnable(true)
    } else {
      setEnable(false)
    }
  },[agendaData])

  useEffect(() => {
    if(enable){
      addToNav({label: "Agenda", href: "#agenda"})
    } else {
      removeFromNav({label: "Agenda"})
    }
  }, [enable])

  if(!enable) return null
  return (
    enable &&
    <section className="w-screen bg-[#022851]" id="agenda">
      <div className="w-full p-4 pt-8 flex flex-col">
        <h1 className="text-4xl text-white">Agenda</h1>
        <div>
          {enabledAgendas?.map((agenda, index) => {
            return (
              <div className="mt-8" key={index}>
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl text-white">{agenda.title}</h2>
                  <div className="md:max-w-[75%] lg:max-w-[50%] self-center">
                    <AgendaLines agenda={agenda.agenda} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Agenda
