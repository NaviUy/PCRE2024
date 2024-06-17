'use client'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {faEarthAmerica} from '@fortawesome/free-solid-svg-icons'
import BlockContent from '@sanity/block-content-to-react'
import {urlFor} from '../../sanity/client'

const MemberCard = ({member, index}) => {
  const getFullUrl = (url) => {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return `https://${url}`
    }
    return url
  }
  return (
    <div className="p-4 bg-white text-black flex flex-col md:flex-row" key={index}>
      <div className="min-w-[100px] h-[100px] self-center">
        <img
          className="w-[100px] h-[100px] self-center object-cover rounded-full"
          src={urlFor(member.image).url()}
          alt={member.name}
        />
      </div>
      <div className="mt-4 flex flex-col md:flex-grow md:ml-8">
        <h3 className="text-lg self-center font-bold text-center">{member.name}</h3>
        <div className="self-center w-full">
          <p className="text-center text-xs text-gray-500">{member.role}</p>
          <div className="flex justify-center gap-2 mt-4">
            {member.linkedin && (
              <a
                href={getFullUrl(member.linkedin)}
                className="text-black hover:text-gray-500"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
            )}
            {member.twitter && (
              <a
                href={getFullUrl(member.twitter)}
                className="text-black hover:text-gray-500"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} size="xl" />
              </a>
            )}
            {member.personal && (
              <a
                href={getFullUrl(member.personal)}
                className="text-black hover:text-gray-500"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEarthAmerica} size="xl" />
              </a>
            )}
          </div>
          <div className="text-xs text-black mt-8 md:mt-4">
            <BlockContent blocks={member.bio} projectId="wjh43571" dataset="production" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default MemberCard
