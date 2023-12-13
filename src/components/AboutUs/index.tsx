
interface IAbout {
    tag: string,
    logo: string,
    desc: string,
}

const AboutUs = ({tag, logo, desc}: IAbout) => {
  return (
    <div className="w-1/4">
        <div className="font-bold py-5">{tag}</div>
        <a href="#" className="text-gray-500">{logo}</a>
        <div className="text-gray-500">{desc}</div>
    </div>
  )
}

export default AboutUs