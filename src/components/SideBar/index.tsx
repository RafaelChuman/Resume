import React from 'react';
import { RiWhatsappLine, RiLinkedinFill } from 'react-icons/ri';
import { MdOutlineMail } from 'react-icons/md';


import { ContactInfo } from "@/mocks/pt-br";
import { Container } from "./SideBar.styled";

{/* {React.createElement(icon)}  */ }


export function SideBar() {



  return (
    <Container>

      <img className='ProfileImage' src={ContactInfo.ProfileImage.Content} alt={ContactInfo.ProfileImage.Alt} />
      <div className={"InfoGroup"}>
        <p className={"InfoTitle"}>
          {ContactInfo.ContactMe.Name}
        </p>


        <div className='Line'></div>


        <div className='Info'>
        <p > 
            <RiWhatsappLine /> &nbsp; {ContactInfo.ContactMe.Content.Phone.Name}
          </p>
          <p>
            {ContactInfo.ContactMe.Content.Phone.Content}
          </p>
        </div>

        <div className='Info'>
          <p > 
            <RiLinkedinFill /> &nbsp; {ContactInfo.ContactMe.Content.LinkedIn.Name}
          </p>
          <p>
            {ContactInfo.ContactMe.Content.LinkedIn.Content}
          </p>
        </div>

        <div className='Info'>
          <p>
            <MdOutlineMail /> &nbsp; {ContactInfo.ContactMe.Content.Email.Name}
          </p>
          <p>
            {ContactInfo.ContactMe.Content.Email.Content}
          </p>
        </div>


      </div>


      <div className={"InfoGroup"}>

        <p className='InfoTitle'>
          {ContactInfo.Skills.Name}
        </p>

        <div className='Line'></div>

        <div className={"SkillsGroup"}>

          <img src={ContactInfo.Skills.Content.postgres.Content} alt={ContactInfo.Skills.Content.postgres.Alt} width={ContactInfo.Skills.Content.postgres.Width} height={ContactInfo.Skills.Content.postgres.Height} />
          </div>
          <div className={"SkillsGroup"}>
          <img src={ContactInfo.Skills.Content.c.Content} alt={ContactInfo.Skills.Content.c.Alt} width={ContactInfo.Skills.Content.c.Width} height={ContactInfo.Skills.Content.c.Height} />

          <img src={ContactInfo.Skills.Content.net.Content} alt={ContactInfo.Skills.Content.net.Alt} width={ContactInfo.Skills.Content.net.Width} height={ContactInfo.Skills.Content.net.Height} />

        </div>

      </div>
    </Container>
  );
}
