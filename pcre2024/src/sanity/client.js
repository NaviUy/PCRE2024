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
  const home = await client.fetch('*[_type == "home"]')
  return home
}

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
