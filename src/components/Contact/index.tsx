

const Info = ({children} : {children: React.ReactNode}) => {
    return(
        <ul>
            {children}
        </ul>
    )
}

interface IContact {
    title: string,
    desc: string,
}

const ContactInfo = ({title, desc}: IContact) => {
    return(
        <li className="py-1">
            <p>{title}</p>
            <p className="text-gray-500">{desc}</p>
        </li>
    )
}

const Contact = ({tag}: {tag: string}) => {
  return (
    <div>
        <div className="font-bold py-5">{tag}</div>
        <Info>
            <ContactInfo title="Address:" desc="123 Street Name, City, England" />
            <ContactInfo title="Phone:" desc="(123) 456-7890" />
            <ContactInfo title="Email:" desc="mail@example.com" />
            <ContactInfo title="Working Days/Hours:" desc="Mon - Sun / 9:00 AM - 8:00 PM"/>
        </Info>
    </div>
  )
}

export default Contact