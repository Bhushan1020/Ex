import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
    const [registrations, setRegistrations] = useState([]);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    useEffect(() => {
        fetchRegistrations();
    }, []);

    const fetchRegistrations = async () => {
        try {
            const response = await axios.get("mongodb+srv://bhushannarawade2003:QrKmW2OfLjrK408O@cluster0.lsiz6m9.mongodb.net/AR");
            setRegistrations(response.data);
        } catch (error) {
            console.error('Error fetching registrations:', error);
        }
    };

    const openFullscreen = (imageUrl) => {
        setFullscreenImage(imageUrl);
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
    };

    return (
        <div style={{ maxWidth: '1200px', margin: '30px 0px 30px 10px' }}>
            <h1 style={{ textAlign: 'center', marginBottom:"20px", color:"#ec5d5d" }}>Registration Data</h1>
            <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #000000' }}>
                <thead style={{ backgroundColor: '#e0b7e1' }}>
                    <tr>
                        <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>Name</th>
                        <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>College Name</th>
                        <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>University Name</th>
                        <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>Group Name</th>
                        <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>Contact Number</th>
                        <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>Group Members</th>
                        <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>Events</th>
                        <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>ID Photo</th>
                        <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {registrations.map((registration, index) => (
                        <tr key={index}>
                            <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>{registration.name}</td>
                            <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>{registration.collegeName}</td>
                            <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>{registration.universityName}</td>
                            <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>{registration.groupName}</td>
                            <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>{registration.contactNo}</td>
                            <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>{registration.groupMembers}</td>
                            <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>{registration.events.join(', ')}</td>
                            <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>
                                <img
                                    src={registration.idPhoto}
                                    alt="ID Photo"
                                    style={{ maxWidth: '100px', cursor: 'pointer' }}
                                    onClick={() => openFullscreen(registration.idPhoto)}
                                />
                            </td>
                            <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #000' }}>{registration.totalAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {fullscreenImage && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onClick={closeFullscreen}
                >
                    <img src={fullscreenImage} alt="Fullscreen" style={{ maxWidth: '90%', maxHeight: '90%' }} />
                </div>
            )}
        </div>
    );
}

export default Admin;
