import postgres from "../assets/postgres.png";
import c from "../assets/c.png";
import net from "../assets/net.png";
import react from "../assets/react.png";

export const UserData = {
    "Name": "Rafael Chuman Santana",
    "Cargo": "Full Stack Developer",
    "AboutMe": {
        "Name": "ABOUT ME",
        "Content":"I have been studying IT since 2009, and I adhere to the principle of never ceasing to learn. I approach my studies with enthusiasm and am always eager to take on new challenges. My foundation is rooted in a military school, where I developed strong values of respect, companionship, and responsibility. These qualities form a perfect combination for fostering a cohesive and effective working team. Lastly, I believe that communication is not merely the ability to speak but also the skill of sharing knowledge.",
    },
    "WorkExperience": {
        "Name": "WORK EXPERIENCE",
        "Content":{
        
        "Dash":{
            "Date":"2011 – 2014",
            "Cargo":"DEV JR.",
            "Name" : "DASH – Brazil – SP.",
            "Content":["I had the great opportunity to work on the BEM-TE-VI project, which involved developing Data Loss Prevention software in C, Asp.Net, and Postgres.",],
        },
        "Eb":{
            "Date":"2014 – 2023",
            "Cargo":"3º Sergeant.",
            "Name" : "BRAZILIAN ARMY.",
            "Content":["In the Brazilian army, I have gained valuable experiences that have shaped my life. I was a 100m sprinter athlete, graduated as a 3rd sergeant in Rio de Janeiro, and acquired specialization in jungle combat in the Amazon. In addition to my military knowledge, I had the opportunity to serve as the Head of User Support and a Network Manager.", "My contributions as a developer involved collecting client (user) requirements and creating software to manage duty rosters using React TS."]
        },
    }
    },
}


export const ContactInfo = {
    "ContactMe": {
        "Name": "CONTACT ME",
        "Content": {
            "Phone": { 
                "Name": "Phone", 
                "Content": "+55 12 99720-0179",
                "ContactText": "Hello%2C+I+was+reviewing+your+profile+and+would+like+to+schedule+a+meeting+with+you.",
                "WhatsAppLink": "https://wa.me/5512997200179?text="
            },
            "LinkedIn": { 
                "Name": "LinkedIn", 
                "Content": "linkedin.com/in/rafaelchuman/" 
            },
            "Email": { 
                "Name": "E-mail", 
                "Content": "Rafael_chumansantana@outlook.com",
                "MailTo": "mailto:rafael_chumansantana@outlook.com?subject=Could+we+schedule+a+meeting%3F"
            },
        }
    },
    "Skills": {
        "Name": "SKILLS",
        "Content": {
            "postgres": { 
                "Alt": "postgres", 
                "Content": postgres, 
                "Width": "180px", 
                "Height": "90px" 
            },
            "c": { 
                "Alt": "c", 
                "Content": c, 
                "Width": "110px", 
                "Height": "110px" 
            },
            "net": { 
                "Alt": ".net", 
                "Content": net, 
                "Width": "110px", 
                "Height": "110px" 
            },
            "react": { 
                "Alt": "React", 
                "Content": react, 
                "Width": "180px", 
                "Height": "115px" 
            },
        }
    },
    "ProfileImage": { "Alt": "Chuman", "Content": "https://media.licdn.com/dms/image/D4E35AQGMKjxpH4blxQ/profile-framedphoto-shrink_200_200/0/1691546748968?e=1696705200&v=beta&t=aHUl_cAr6eGBNq3st4_J9YjcJ8c4K6nzehMcbyplG4Q" },
    "BannerImage": { "Alt": "Codding", "Content": "https://media.licdn.com/dms/image/D4E16AQEkiKekppH_xw/profile-displaybackgroundimage-shrink_350_1400/0/1691547286620?e=1701302400&v=beta&t=bUeQW4dBz9hnCFeOrYK3xKY1mLiKwz49EtVgURw3iws" },
}