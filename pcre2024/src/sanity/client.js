import {createClient} from 'next-sanity'
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "wjh43571",
  dataset: "production",
  apiVersion: "2024-01-01",
  // unless you have caching for your front end, `useCdn` should be `true` for most production environments
  useCdn: true,
})

export async function getHome(){
  console.log("Fetching home...")
  const home = await client.fetch('*[_type == "home"]')
  return home
}

export async function getSpeakers(){
  console.log("Fetching speakers...")
  const query = `
  *[_type == "speakers"]|order(orderRank) {
    _id,
    enable,
    title,
    speakers[]{
      _key,
      _type,
      name,
      bio,
      school,
      subtitle,
      enable,
      image {
        asset->{
          _id,
          url,
          metadata {
            lqip
          }
        },
        alt
      }
    }
  }
`
  const speakers = await client.fetch(query)
  return speakers
}

export async function getResidents(){
  console.log("Fetching residents...")
  const residents = await client.fetch('*[_type == "residents"]')
  return residents
}

export async function getOrganizers(){
  console.log("Fetching organizers...")
  const query = `
    *[_type == "organizers"]{
      _id,
      enable,
      title,
      description,
      members[]{
        _key,
        _type,
        name,
        bio,
        role,
        enable,
        image {
          asset->{
            _id,
            url,
            metadata {
              lqip
            }
          },
          alt
        },
        twitter,
        linkedin,
        personal
      }
    }
  `
  const organizers = await client.fetch(query)
  console.log(organizers)
  return organizers
}

export async function getAgenda(){
  console.log("Fetching agenda...")
  const agenda = await client.fetch('*[_type == "agenda"]|order(orderRank)')
  return agenda
}

export async function getVenue(){
  console.log("Fetching venue...")
  const query = `
    *[_type == "venue"]{
      _id,
      enable,
      title,
      image {
        asset->{
          _id,
          url,
          metadata {
            lqip
          }
        },
        alt
      }
    }
  `
  const venue = await client.fetch(query)
  return venue
}

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
