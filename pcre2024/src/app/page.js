"use client"

import { useEffect, useState } from "react";
import { getHome, getSpeakers, urlFor } from "../sanity/client";

const formatDate = (dateString) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Split the date string into year, month, and day
    const [year, month, day] = dateString.split('-');

    // Create a new Date object with the provided date
    const date = new Date(year, month - 1, day); // month is zero-based in Date constructor

    // Get month in text
    const monthText = months[date.getMonth()];

    // Get day in number
    const dayNumber = date.getDate();

    // Convert year to number
    const yearNumber = parseInt(year);

    // Return an object containing the formatted date components
    return {
        month: monthText,
        day: dayNumber,
        year: yearNumber
    };
}

const ordinal_suffix_of = (i) => {
  let j = i % 10,
  k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
}

export default function page() {

  const [homeData, setHomeData] = useState(null)
  const [speakerData, setSpeakerData] = useState([])

  useEffect(() => {
    getHome().then(data => {
      let sanityData = data[0]
      sanityData.background_image.url = urlFor(sanityData.background_image).url()
      sanityData.start_date_object = formatDate(sanityData.start_date)
      sanityData.end_date_object = formatDate(sanityData.end_date)
      console.log(sanityData)
      setHomeData(sanityData)
    }).catch(e => {
      console.log(e)
    })

    getSpeakers().then(data => {
      console.log(data)
      setSpeakerData(data)
    }).catch(e => {
      console.log(e)
    })
  }, [])

  return (
  <main>
    <section className="w-screen min-h-screen" style={{ backgroundImage: `url(${homeData?.background_image?.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }} id="home">
      <div className={`pt-28 p-4 z-10 h-full w-full flex flex-col md:justify-center items-center transition-all duration-200 ${homeData ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`content border w-full h-fit max-w-[928px] md:w-fit flex flex-col justify-center items-start py-8 md:px-8`}>
          <div className="px-4">
            <h2 className="text-white"><span className="bg-[#022851] text-[#FFBF00] p-2 font-semibold text-lg">{ homeData?.subheading }</span></h2>
            <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold mt-4">{ homeData?.heading }</h1>
          </div>
          <div className="mt-10 px-4 w-full flex justify-center items-center">
            <a className="border py-2 px-4 font-semibold transition-all text-white hover:bg-white hover:text-black" href={homeData?.cta_action}>{ homeData?.cta_text }</a>
          </div>
        </div>
        <div className="w-full md:flex max-w-[928px] md:justify-center md:items-center">
          <div className="content rounded-lg w-full h-fit lg:w-full md:h-full md:justify-start flex flex-col justify-center items-start py-8 md:px-8">
            <div className="text-lg font-bold self-start bg-[#022851] text-[#FFBf00] p-2">WHEN?</div>
            <div className="text-white text-md font-semibold mt-4 border w-full md:w-full py-4">
              <p className="ml-4 md:mr-4">Starts: {homeData?.start_date_object?.month} {ordinal_suffix_of(homeData?.start_date_object?.day)}, {homeData?.start_date_object?.year}</p>
              <p className="ml-4 md:mr-4">Ends: {homeData?.end_date_object?.month} {ordinal_suffix_of(homeData?.end_date_object?.day)}, {homeData?.end_date_object?.year}</p>
            </div>
          </div>
          <div className="content rounded-lg w-full h-fit max-w-[928px] md:w-[50%] md:h-full md:justify-start flex flex-col justify-center items-start py-8 md:px-8">
            <div className="text-lg font-bold self-start bg-[#022851] text-[#FFBf00] p-2">WHERE?</div>
            <div className="text-white text-md font-semibold mt-4 border w-full py-4 md:w-full md:h-full">
              <p className="ml-4 md:mr-4">{homeData?.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-screen min-h-screen bg-[#022851]" id="speakers">
      <div className="w-full p-4 pt-8 flex flex-col">
        <h1 className="text-4xl">Speakers</h1>
        <div className="mt-4 md:ml-4">
          {speakerData.map((item, index) => (
            <div class="mt-4 md:mt-10">
              <h2 className="text-xl" key={index}>{item.title}</h2>
              <div className="flex flex-col md:flex-row gap-4 md:flex-wrap mt-4">
                {item.speakers.map((speaker, index) => (
                  <div class="p-4 md:w-[350px] lg:w-[450px] bg-white text-black flex flex-col">
                    <div className="w-[100px] h-[100px] self-center">
                      <img className="w-full h-full object-cover rounded-full" src={urlFor(speaker.image).url()} alt={speaker.name} />
                    </div>
                    <div className="mt-4 flex flex-col">
                      <h3 className="text-lg self-center font-bold" key={index}>{speaker.name}</h3>
                      <div className="self-center">
                      <p className="text-xs text-gray-500 text-center">{speaker.school}</p>
                        <p className="text-xs text-gray-500 text-center">{speaker.subtitle}</p>
                      </div>
                      <p className="text-sm mt-4">{speaker.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
  );
}


// bg-[url('')] bg-cover bg-center backdrop-blur-xl
