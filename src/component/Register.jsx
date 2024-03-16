import React, { useState } from 'react';
import axios from 'axios';
import bgImg from './bgimg.jpg';

function Register() {
    const [name, setName] = useState("");
    const [collegeName, setCollegeName] = useState("");
    const [universityName, setUniversityName] = useState("");
    const [groupName, setGroupName] = useState("");
    const [events, setEvents] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [contactNo, setContactNo] = useState("");
    const [groupMembers, setGroupMembers] = useState(1);

    const eventFees = {
        RoboWar: 400,
        LineFollowerRobot: 200,
        DroneRacing: 600,
        Esports: 700,
        RobotProgramming: 200,
        RoboExpo: 300,
        Contraption: 300,
        DigitalPosterPresentation: 400,
        PaperPresentation: 500 // Added event9 with its respective fee
    };

    const handleEventChange = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setEvents([...events, name]);
        } else {
            setEvents(events.filter((event) => event !== name));
        }
    };

   

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (totalAmount > 0) {
          
            const registrationData = {
                name,
                collegeName,
                universityName,
                groupName,
                events,
                totalAmount,
                contactNo,
                groupMembers
            };

            axios.post("mongodb+srv://bhushannarawade2003:QrKmW2OfLjrK408O@cluster0.lsiz6m9.mongodb.net/AR", registrationData)
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                    alert('You have registered successfully!');
                    setName("");
                    setCollegeName("");
                    setUniversityName("");
                    setGroupName("");
                    setEvents([]);
                    setTotalAmount(0);
                    setContactNo("");
                    setGroupMembers(1);
                })
                .catch((err) => console.log(err));
        } else {
            alert('Please provide all required information.');
        }
    };



    const calculateTotalAmount = () => {
        let total = 0;
        events.forEach((event) => {
            total += eventFees[event];
        });
        setTotalAmount(total);
    };

    const handlePayNow = () => {
        const upiId = "7218700483@axl";
        const phonePeURL = "upi://pay?pa=" + upiId + "&pn=YourMerchantName&am=" + totalAmount + "&cu=INR";
        window.location.href = phonePeURL;
    };
    return (
        <div className='my' style={{backgroundImage: `url(${bgImg})`,backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}} >
            <center>
            <form onSubmit={handleSubmit} style={{ maxWidth: '100%', overflowX: 'auto' }}>
                <table cellPadding={'15px'} cellSpacing={'25px'} style={{width:"100%",maxWidth:"620px",background:"#dbdbdb", margin: '0px 25px 0px 25px', padding: "25px", borderRadius:"40px"}}>
                    <tbody>
                                   <tr>
                    <td><label htmlFor="name">Name:</label></td>
                    <td><input type="text" name="name" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required style={{ marginLeft: '10px', padding: '5px' }} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="collegeName">College Name:</label></td>
                    <td><input type="text" name="collegeName" id="collegeName" placeholder="Enter college name" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} required style={{ marginLeft: '10px', padding: '5px' }} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="universityName">University Name:</label></td>
                    <td><input type="text" name="universityName" id="universityName" placeholder="Enter university name" value={universityName} onChange={(e) => setUniversityName(e.target.value)} required style={{ marginLeft: '10px', padding: '5px' }} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="groupName">Group Name:</label></td>
                    <td><input type="text" name="groupName" id="groupName" placeholder="Enter group name" value={groupName} onChange={(e) => setGroupName(e.target.value)} required style={{ marginLeft: '10px', padding: '5px' }} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="contactNo">Contact Number:</label></td>
                    <td><input type="text" maxLength={10} name="contactNo" id="contactNo" placeholder="Enter contact number" value={contactNo} onChange={(e) => setContactNo(e.target.value)} required style={{ marginLeft: '10px', padding: '5px' }} /></td>
                </tr>
             
                <tr>
                    <td><label htmlFor="groupMembers">Group Members:</label></td>
                    <td>
                        <select name="groupMembers" id="groupMembers" value={groupMembers} onChange={(e) => setGroupMembers(e.target.value)}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </td>
                </tr>
                <tr>
                        <td><label>Events:</label></td>
                        <td>
                                
                    
                        <input type="checkbox" name="RoboWar" id="RoboWar" checked={events.includes("RoboWar")} onChange={handleEventChange} style={{ marginLeft: '10px' }} />
                        <label htmlFor="RoboWar"> &nbsp;Robo War</label>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="checkbox" name="LineFollowerRobot" id="LineFollowerRobot" checked={events.includes("LineFollowerRobot")} onChange={handleEventChange} style={{ marginLeft: '10px' }} />
                        <label htmlFor="LineFollowerRobot"> &nbsp;Line Follower Robot</label><br/>

                        <input type="checkbox" name="DroneRacing" id="DroneRacing" checked={events.includes("DroneRacing")} onChange={handleEventChange} style={{ marginLeft: '10px' }} />
                        <label htmlFor="DroneRacing"> &nbsp;Drone Racing</label>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="checkbox" name="Esports" id="Esports" checked={events.includes("Esports")} onChange={handleEventChange} style={{ marginLeft: '10px' }} />
                        <label htmlFor="Esports"> &nbsp;E-Sports</label><br/>

                        <input type="checkbox" name="RobotProgramming" id="RobotProgramming" checked={events.includes("RobotProgramming")} onChange={handleEventChange} style={{ marginLeft: '10px' }} />
                        <label htmlFor="RobotProgramming">Robot Programming</label> 
                        <input type="checkbox" name="RoboExpo" id="RoboExpo" checked={events.includes("RoboExpo")} onChange={handleEventChange} style={{ marginLeft: '10px' }} />
                        <label htmlFor="RoboExpo"> &nbsp;Robo Expo</label><br/>

                        <input type="checkbox" name="Contraption" id="Contraption" checked={events.includes("Contraption")} onChange={handleEventChange} style={{ marginLeft: '10px' }} />
                        <label htmlFor="Contraption"> &nbsp;Contraption</label>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="checkbox" name="DigitalPosterPresentation" id="DigitalPosterPresentation" checked={events.includes("DigitalPosterPresentation")} onChange={handleEventChange} style={{ marginLeft: '10px' }} />
                        <label htmlFor="DigitalPosterPresentation"> &nbsp;Digital Poster Presentation</label>
                        <br/>
                        <input type="checkbox" name="PaperPresentation" id="PaperPresentation" checked={events.includes("PaperPresentation")} onChange={handleEventChange} style={{ marginLeft: '10px' }} />
                        <label htmlFor="PaperPresentation"> &nbsp;Paper Presentation</label>
                    </td>
                </tr>

                 
                        <tr>
                            <td>Total Amount:</td>
                            <td>{totalAmount} Rs</td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="button" onClick={calculateTotalAmount} style={{ padding: '8px 20px', backgroundColor: '#6942b1', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', marginRight: '10px' }}>Calculate Total</button>
                                <button type="button"  onClick={handlePayNow}style={{ padding: '8px 20px', backgroundColor: '#534caf', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', marginRight: '10px' }}>Pay Now</button>
                            </td>
                        </tr>
                     
                        <tr>
                            <td></td>
                            <td><button type="submit" style={{ padding: '8px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>Register</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            </center>
        </div>
    );
}

export default Register;
