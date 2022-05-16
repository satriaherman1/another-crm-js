import { ClipboardTickFilledIcon, FacebookFilledIcon, InstagramFilledIcon, LinkedinFilledIcon, MessageFilledIcon, PhoneFilledIcon, TiktokFilledIcon, TwitterFilledIcon, UserProfileIcon, } from "@src/components/common/Icon";
export default function AccountInfoBox(props) {
    const { email, phone, zip, website, city, username, facebookUrl, instagramUrl, tiktokUrl, linkedinUrl, twitterUrl } = props;
    return (<section className="bg-crm-dark-300 py-8 px-5 mt-4 rounded-md w-full">
      <div className="flex text-white">
        <UserProfileIcon fill="#fff"/>
        <h5 className="ml-3 ">Account Info</h5>
      </div>

      <img src="https://i.ibb.co/NjHFTJb/avatar-example.png" width={50} alt="user-photo-profile" className="mt-5"/>
      <h2 className="text-[20px] font-semibold mt-3">{username}</h2>

      <div className="flex gap-x-2 my-3">
        <ClipboardTickFilledIcon />
        <MessageFilledIcon />
        <PhoneFilledIcon />
      </div>

      <p className="text-crm-gray mt-4">Email</p>
      <a href="" className="text-blue">
        {email}
      </a>

      <p className="text-crm-gray mt-4">Phone</p>
      <h5 className="text-white">{phone}</h5>

      <p className="text-crm-gray mt-4">Website</p>
      <h5 className="text-white">{website}</h5>

      <p className="text-crm-gray mt-4">City</p>
      <h5 className="text-white">{city}</h5>

      <p className="text-crm-gray mt-4">Zip</p>
      <h5 className="text-white">{zip}</h5>

      <div className="flex gap-x-3 my-3">
        <a href={tiktokUrl}>
          <TiktokFilledIcon />
        </a>
        <a href={instagramUrl}>
          <InstagramFilledIcon />
        </a>
        <a href={twitterUrl}>
          <TwitterFilledIcon />
        </a>
        <a href={facebookUrl}>
          <FacebookFilledIcon />
        </a>
        <a href={linkedinUrl}>
          <LinkedinFilledIcon />
        </a>
      </div>
    </section>);
}
