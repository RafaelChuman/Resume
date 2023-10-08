import React from "react";
import { RiWhatsappLine, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

import { ContactInfo } from "@/mocks/pt-br";
import { Container } from "./SideBar.styled";

import { UserData } from "@/mocks/pt-br";

export function SideBar() {
  return (
    <Container>
      <div className="ProfileImageContainer">
        <img
          className="ProfileImage"
          src={ContactInfo.ProfileImage.Content}
          alt={ContactInfo.ProfileImage.Alt}
        />
      </div>
      <div className={"InfoGroup"}>
        <div>
          <h1>{UserData.Name}</h1>
          <h2>{UserData.Cargo}</h2>
        </div>

        <a
          href={
            ContactInfo.ContactMe.Content.Phone.WhatsAppLink +
            ContactInfo.ContactMe.Content.Phone.ContactText
          } target="_blank"
        >
          <div className="Info">
            <p>
              <RiWhatsappLine /> &nbsp;{" "}
              {ContactInfo.ContactMe.Content.Phone.Name}
            </p>

            <p>{ContactInfo.ContactMe.Content.Phone.Content}</p>
          </div>
        </a>

        <a href={"http://" + ContactInfo.ContactMe.Content.LinkedIn.Content} target="_blank">
          <div className="Info">
            <p>
              <RiLinkedinFill /> &nbsp;{" "}
              {ContactInfo.ContactMe.Content.LinkedIn.Name}
            </p>
            {ContactInfo.ContactMe.Content.LinkedIn.Content}
          </div>
        </a>

        <a href={ContactInfo.ContactMe.Content.Email.MailTo} target="_blank">
          <div className="Info">
            <p>
              <MdOutlineMail /> &nbsp;{" "}
              {ContactInfo.ContactMe.Content.Email.Name}
            </p>
            <p>{ContactInfo.ContactMe.Content.Email.Content}</p>
          </div>
        </a>
        <a href={ContactInfo.ContactMe.Content.GitHub.Content} target="_blank">
          <div className="Info">
            <p>
              <RiGithubFill /> &nbsp;{" "}
              {ContactInfo.ContactMe.Content.GitHub.Name}
            </p>
            <p>{ContactInfo.ContactMe.Content.GitHub.Content}</p>
          </div>
        </a>
      </div>

      <div className={"InfoGroup"}>
        <div className={"SkillsGroup"}>
          <img
            src={ContactInfo.Skills.Content.postgres.Content}
            alt={ContactInfo.Skills.Content.postgres.Alt}
            width={ContactInfo.Skills.Content.postgres.Width}
            height={ContactInfo.Skills.Content.postgres.Height}
          />
        </div>
        <div className={"SkillsGroup"}>
          <img
            src={ContactInfo.Skills.Content.c.Content}
            alt={ContactInfo.Skills.Content.c.Alt}
            width={ContactInfo.Skills.Content.c.Width}
            height={ContactInfo.Skills.Content.c.Height}
          />

          <img
            src={ContactInfo.Skills.Content.net.Content}
            alt={ContactInfo.Skills.Content.net.Alt}
            width={ContactInfo.Skills.Content.net.Width}
            height={ContactInfo.Skills.Content.net.Height}
          />

          
        </div>

        <div className={"SkillsGroup"}>
          <img
            src={ContactInfo.Skills.Content.react.Content}
            alt={ContactInfo.Skills.Content.react.Alt}
            width={ContactInfo.Skills.Content.react.Width}
            height={ContactInfo.Skills.Content.react.Height}
          />


          
        </div>
       
      </div>
    </Container>
  );
}
