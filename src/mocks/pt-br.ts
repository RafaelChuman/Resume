import postgres from "../assets/postgres.png";
import c from "../assets/c.png";
import net from "../assets/net.png";
import ProfileImage from "../assets/ProfileImage.png";

export const UserData = {
    "Name": "Rafael Chuman Santana",
    "Cargo": "Full Stack Developer",
    "AboutMe": {
        "Name": "ABOUT ME",
        "Content":"I study IT since 2009 and I follow the idea of never stop learning, with a great mood and always look for a challenge. My base is a military school so the respect, companionship and responsibility are my main skills, it’s a perfect combination for a great working team. Finally communication it’s not the ability of talk, but the capability of share knowledge.",
    },
    "WorkExperience": {
        "Name": "WORK EXPERIENCE",
        "Content":{
        
        "Dash":{
            "Date":"2011 – 2014",
            "Cargo":"DEV JR.",
            "Name" : "DASH – Brazil – SP.",
            "Content":["I got the great opportunity of work on project BEM-TE-VI, and it were a Data Lost Prevention software in C, Asp.Net and Postgres.",],
        },
        "Eb":{
            "Date":"2014 – 2022",
            "Cargo":"3º Sergeant.",
            "Name" : "BRAZILIAN ARMY.",
            "Content":["In the experiences Brazilian in my athlete, graduated Janeiro, and I army life. as got a I 3o I’ve was a goten 100m sergeant in specialization combat in Amazon. Beside the military in all runner Rio de jungle knowledge I had the opportunity tho be the Head of user support and a network menage.", "My contribution as developer where in collecting requirements  of  clients (users) and create a software to management duty grate."]
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
                "Content": "+55 12 99720-0179" 
            },
            "LinkedIn": { 
                "Name": "LinkedIn", 
                "Content": "linkedin.com/in/ rafaelchuman/" 
            },
            "Email": { 
                "Name": "E-mail", 
                "Content": "Rafael_chumansantana@ outlook.com" 
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
        }
    },
    "ProfileImage": { "Alt": "postgres", "Content": ProfileImage },
}