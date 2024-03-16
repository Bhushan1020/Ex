import React from 'react';
import ganesh from '../images/ganesh.jpg'
import akshada from '../images/akshada.jpg'
import rutuja from '../images/rutuja.jpg'
import ani from '../images/ani.jpg'
import kalyani from '../images/kalyani.jpg'
import kanchan from '../images/kanchan.jpg'
import kaveri from '../images/kaveri.jpg'
import nikhil from '../images/nikhil.jpg'
import pari from '../images/pari.jpg'
import pooja from '../images/pooja.jpg'
import poonam from '../images/poonam.jpg'
import pragati from '../images/pragati.jpg'
import prajwali from '../images/prajwali.jpg'
import shirish from '../images/shirish.jpg'
import shradha from '../images/shradha.jpg'
import shreyas from '../images/shreyas.jpg'
import snehal from '../images/snehal.jpg'
import sudhir from '../images/sudhir.jpg'
import sumit from '../images/sumit.jpg'
import tanuja from '../images/tanuja.jpg'
import yash from '../images/yash.jpg'
import pathade from '../images/pathade.jpg'
import abhishek from '../images/abhishek.jpg'
import rushi from '../images/rushi.jpg'
import abhikale from '../images/abhikale.jpg'
import om from '../images/om.jpg'
import onkarshelke from '../images/onkarshelke.jpg'
import patil from '../images/patil.jpg'
import haseonkar from '../images/haseonkar.jpg'
import nikhilhajare from '../images/nikhilhajare.jpg'
import sanket from '../images/sanket.jpg'

















import bgImage from './bgimg.jpg';  // Import Michael Johnson image

const Team = () => {
  return (
    <div style={{...styles.page,backgroundImage: `url(${bgImage})`}}>
     <center> <h1 style={styles.heading}>Our Team</h1>
      <p style={styles.paragraph}><h5>Meet our amazing team members...</h5></p></center>
      <li style={styles.listItem}>
          <img src={pathade} alt="John Doe" style={styles.image} />
          <div style={{color:"white",height:"80px"}}>
            <h6><span style={{fontSize:"1.2rem"}}>prof.</span> H.P. Pathade <br/> Event Manager
            <br />
            Contact: +91 9011076115</h6>
          </div>
        </li>
        <br/>
       <center> <h3 style={{color:"#fff"}}>Event Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={patil} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Ganesh Patil <br/> Co-ordinator
              <br />
              Contact: +91 8010534749
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={ganesh} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Ganesh Kawade <br/> Co-ordinator
              <br />
              Contact: +91 7756867690
            </div>
          </li>
        </ul>

    
        <center> <h3 style={{color:"#fff"}}>Teasurer</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={abhishek} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Abhishek Kakad 
              <br />
              Contact: +91 9511701972
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={rushi} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
             Rushikesh Karle
              <br />
              Contact: +91 9028250150
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={abhikale} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
             Abhishek Kale
              <br />
              Contact: +91 8830161719
            </div>
          </li>
        </ul>





        <center> <h3 style={{color:"#fff"}}>Robo War Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={ganesh} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Ganesh Kawade 
              <br />
              Contact: +91 7756867690
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={akshada} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Akshada Bhagwat 
              <br />
              Contact: +91 9373336266
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={rutuja} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Rutuja Gawande 
              <br />
              Contact: +91 9373336266
            </div>
          </li>
        </ul>


        <center> <h3 style={{color:"#fff"}}>Line Follower Robot Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={om} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Om Gunjal
              <br />
              Contact: +91 7558352327
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={shirish} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Shirish Sangle
              <br />
              Contact: +91 9359745542
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={pragati} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Pragati Takate 
              <br />
              Contact: +91 9699717113
            </div>
          </li>
        </ul>



        <center> <h3 style={{color:"#fff"}}>Drone Racing Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={onkarshelke} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Onkar Shelke 
              <br />
              Contact: +91 9021314192
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={haseonkar} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Onkar Hase
              <br />
              Contact: +91 8600298165
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={ani} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Aniket Dighe 
              <br />
              Contact: +91 9921460192
            </div>
          </li>
        </ul>


        <center> <h3 style={{color:"#fff"}}>E-sports Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={shreyas} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Shreyas Thokale
              <br />
              Contact: +91 9518912170
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={yash} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Yash Chaskar
              <br />
              Contact: +91 8468914149
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={sumit} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Sumit Dhokare 
              <br />
              Contact: +91 7020799454
            </div>
          </li>
        </ul>



        <center> <h3 style={{color:"#fff"}}>Robo Exhibition Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={sanket} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Sanket Thakare
              <br />
              Contact: +91 9307527664
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={pooja} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Pooja Sonawane 
              <br />
              Contact: +91 8010464545
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={kaveri} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Kaveri Tambe 
              <br />
              Contact: +91 9075512060
            </div>
          </li>
        </ul>


        <center> <h3 style={{color:"#fff"}}>Digital Poster Presentation Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={shreyas} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Shreyas Thokale
              <br />
              Contact: +91 9518912170
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={kalyani} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Kalyani Gadakh 
              <br />
              Contact: +91 9307137377
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={shradha} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Shradha Wabale
              <br />
              Contact: +91 7058408036
            </div>
          </li>
        </ul>


        <center> <h3 style={{color:"#fff"}}>Paper Presentation Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={pari} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Parimal Pokharkar 
              <br />
              Contact: +91 9370369376
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={nikhil} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Nikhil Pagare
              <br />
              Contact: +91 7887961904
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={tanuja} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Tanuja Rahane
              <br />
              Contact: +91 9356868961
            </div>
          </li>
        </ul>


        <center> <h3 style={{color:"#fff"}}>Contraption Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={snehal} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Snehal Kachale
              <br />
              Contact: +91 9422261095
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={prajwali} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Prajwali Landge
              <br />
              Contact: +91 9422261095
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={nikhilhajare} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Nikhil Hajare 
              <br />
              Contact: +91 9322637245
            </div>
          </li>
        </ul>



        <center> <h3 style={{color:"#fff"}}>Robo Programming Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={sudhir} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Sudhir Tambe
              <br />
              Contact: +91 9359233410
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={kanchan} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Kanchan Bibave
              <br />
              Contact: +91 9359233410
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={poonam} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Punam Khilari 
              <br />
              Contact: +91 9359233410
            </div>
          </li>
        </ul>

  </div>




        
  );
}

const styles = {
  page: {
    Width: '100%',
    padding: '20px',
    backgroundColor: '#eeeded',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  heading: {
    color: '#fff'
  },
  paragraph: {
    color: '#fff',
    lineHeight: '1.5'
  },
  list: {
    color:"#fff",
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  listItem: {
    flexBasis: '30%', // Adjust this value as per your design
    margin: '10px',
    textAlign: 'center'
  },
  image: {
    width: '100px', // Adjust the width as per your requirement
    height: '100px', // Adjust the height as per your requirement
    marginBottom: '10px', // Add some space between the image and the text
    borderRadius: '50%', // Make the image circular (assuming it's a profile picture)
  }
};

export default Team;
