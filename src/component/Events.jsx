import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Image from '../images/bg.jpg';
import event1 from '../images/Robowar.jpg';
import event2 from '../images/Linefollowerrobot.jpg';
import event3 from '../images/Dronracing.jpg';
import event4 from '../images/e.jpg';
import event5 from '../images/robotprogramming.jpg';
import event6 from '../images/Roboexpo.jpg';
import event7 from '../images/contraption.jpg';
import event8 from '../images/digitalposterpresentation.jpg';
import event9 from '../images/paperpresentation.jpg';
import './Events.css';

const Events = () => {
    const [events, setEvents] = useState([
        { id: 1, name: 'Robo War', date: '2024-03-15', location: 1, image: event1, description:"Get ready to witness an adrenaline-fueled battle of robots in the ultimate test of strength and strategy! In the Robowar competition, teams will pit their custom-built robots against each other in a thrilling showdown of mechanical mayhem."
        ,fileUrl: 'https://drive.google.com/file/d/1ViCQ2rOhjSIUxkgHQIGxg74pbFpZCk2b/view?usp=sharing',link:"https://forms.gle/YjAVHL78ZHPc2mRR7" },
        { id: 2, name: 'Line Follower Robot', date: '2024-03-20', location: 2, image: event2, description: "Welcome to the Line Follower Robot competition! This exciting event challenges participants to design and build autonomous robots capable of following a predefined path on a track using sensors and programming algorithms.",fileUrl: 'https://drive.google.com/file/d/1ViCQ2rOhjSIUxkgHQIGxg74pbFpZCk2b/view?usp=sharing',link:"https://forms.gle/YjAVHL78ZHPc2mRR7" },
        { id: 3, name: 'Dron Racing', date: '2024-03-25', location: 3, image: event3, description: "Welcome to the adrenaline-fueled world of drone racing! Get ready to witness an exhilarating display of speed, agility, and precision as skilled pilots navigate their drones through a challenging course filled with obstacles and twists." ,fileUrl: 'https://drive.google.com/file/d/1ViCQ2rOhjSIUxkgHQIGxg74pbFpZCk2b/view?usp=sharing',link:"https://forms.gle/YjAVHL78ZHPc2mRR7"},
        { id: 4, name: 'E-sport', date: '2024-03-29', location: 4, image: event4, description: "eSports feature professional gamers battling across various video game genres like MOBAs and FPS. Tournaments, held in arenas or online, draw millions of viewers, offering substantial prizes and elevating gaming to a global competitive spectacle." ,fileUrl: 'https://drive.google.com/file/d/1ViCQ2rOhjSIUxkgHQIGxg74pbFpZCk2b/view?usp=sharing',link:"https://forms.gle/YjAVHL78ZHPc2mRR7"},
        { id: 5, name: 'Robot Programming', date: '2024-03-22', location: 5, image: event5, description: "In the Robot Programming event, participants showcase their coding prowess by developing algorithms that control robotic devices. Challenges may involve navigating mazes, manipulating objects, or completing tasks autonomously. This event tests participants' programming skills, problem-solving abilities, and creativity in crafting efficient and precise robotic behaviors.",fileUrl: 'https://drive.google.com/file/d/1ViCQ2rOhjSIUxkgHQIGxg74pbFpZCk2b/view?usp=sharing',link:"https://forms.gle/YjAVHL78ZHPc2mRR7"},
        { id: 6, name: 'Robo Expo / Exhibition', date: '2024-03-27', location: 6, image: event6, description: "Experience the cutting-edge of robotics at the Robot Innovator Exhibition, where innovation meets imagination. This interactive showcase brings together the latest advancements in robotics technology, featuring a diverse range of robotic creations designed to inspire, educate, and captivate audiences of all ages." ,fileUrl: 'https://drive.google.com/file/d/1ViCQ2rOhjSIUxkgHQIGxg74pbFpZCk2b/view?usp=sharing',link:"https://forms.gle/YjAVHL78ZHPc2mRR7"},
        { id: 7, name: 'Contraption', date: '2024-03-28', location: 8, image: event7, description: "Robo contraption competitions inspire participants to design and build multifaceted robots, blending mechanical, electrical, and programming skills. Teams strategize and innovate to overcome challenges, fostering creativity, problem-solving, and teamwork in a dynamic environment.",fileUrl: 'https://drive.google.com/file/d/1ViCQ2rOhjSIUxkgHQIGxg74pbFpZCk2b/view?usp=sharing' ,link:"https://forms.gle/YjAVHL78ZHPc2mRR7"},
        { id: 8, name: 'Digital Poster Presentation', date: '2024-03-30', location: 7, image: event8, description: "Digital poster competitions entail crafting visually captivating posters using multimedia elements and digital tools. Participants convey ideas, promote concepts, and engage in friendly competition, showcasing their design skills and creativity in a digital format." ,fileUrl: 'https://drive.google.com/file/d/1ViCQ2rOhjSIUxkgHQIGxg74pbFpZCk2b/view?usp=sharing' ,link:"https://forms.gle/YjAVHL78ZHPc2mRR7"},
        { id: 9, name: 'Paper Presentation', date: '2024-03-30', location: 7, image: event9, description: "Paper presentation competitions showcase research or scholarly work through oral presentations summarizing papers. Participants present findings, ideas, or analyses, supported by visual aids, aiming for clarity, originality, and effective communication to peers and judges." ,fileUrl: 'https://drive.google.com/file/d/1ViCQ2rOhjSIUxkgHQIGxg74pbFpZCk2b/view?usp=sharing',link:"https://forms.gle/YjAVHL78ZHPc2mRR7"}
    ]);

    const handleDownload = (fileUrl) => {
        window.open(fileUrl, '_blank');
    };

    // backgroundImage: `url(${Image})`
    return (
        <div style={{ position: 'relative', background:"#9096bb" }}>
            
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: '1' }}>
                <h1 style={{ textAlign: 'center', color: '#fff', width: '100%' }}>Events</h1>
                {events.map(event => (
                    <div key={event.id} className="event-item">
                        <img src={event.image} alt="" className="event-image" />
                        <h2 className="event-name">{event.name}</h2>
                        <p className="event-info"><b>Date: </b>{event.date}</p>
                        {/* <p className="event-info"><b>Date: </b> {event.location}</p> */}
                        <p className="event-description">{event.description}</p>
                        <button style={{ 
        background: "#007bff",
        border: "2px solid black",
        borderRadius: "10px",
        height: "40px", // Increase the height
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = "#36ae34"} // Change color on hover
    onMouseLeave={(e) => e.target.style.backgroundColor = "#007bff"} onClick={() => handleDownload(event.fileUrl)}>Download Info</button>
    <Link to={event.link}><button style={{ 
        background: "#007bff",
        border: "2px solid black",
        marginLeft:"10px",
        borderRadius: "10px",
        height: "40px", // Increase the height
    }}>Register</button></Link>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default Events;
