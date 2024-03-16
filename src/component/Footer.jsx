import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-white" style={{background:"#000"}}>
      <div className="container" >
        <div className="row" >
          {/* Info Section */}
          <div className="col-md-6" style={{paddingTop:"10px"}}>
            
              <h6 className="text-white">Phone : +91 7558352327</h6>
              <h6 className="text-white">Email : ar.event.managment00@gmail.com</h6>
              
          </div>
          {/* Icon Section */}
          <div className="col-md-6">
            <div className="p-2">
              <section className="mb-2">
                {/* Facebook */}
                {/* <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#3b5998">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.85 3.55 8.88 8.17 9.65v-6.85H7.68V12h2.49V9.48c0-2.45 1.45-3.79 3.7-3.79 1.07 0 2.13.19 2.13.19v2.34h-1.2c-1.18 0-1.54.73-1.54 1.48V12h2.62l-.42 2.8h-2.2v6.85C18.45 20.88 22 16.85 22 12c0-5.52-4.48-10-10-10z" />
                  </svg>
                </a> */}
                {/* YouTube */}
                <a className="btn btn-outline-light btn-floating m-1" href="https://youtube.com/@SAARAVCOE?si=J8or1liH0_X0sPh4" role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#c4302b">
                    <path d="M23.23 7.54c-.3-1.12-1.12-1.98-2.15-2.27C19.35 5 12 5 12 5s-7.35 0-9.08.27c-1.03.3-1.85 1.15-2.15 2.27C.42 9.26.42 12 2.77 12c1.39 0 5.53 0 5.53 0v4.52s-1.17.02-2.25.02c-.53 0-1.26.3-1.87.58.01.05-.14.66-.21.97.05.14.18.62.27.94.36.99 1.02 1.76 2.02 2.14.94.42 2.05.5 2.63.55 2.24.13 5.6.13 5.6.13s4.14 0 5.53-.02c2.35-.02 2.35-2.74 2.35-2.74s.02-2.65.02-5.3c0-2.66-.02-5.31-.02-5.31s0-2.72-2.35-2.74zM9.53 15.13V8.87l5.75 3.13-5.75 3.13z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/excalibur_ar_avcoe?utm_source=qr&igsh=MXUxdTNrNHk2NjN4bQ==" role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#405de6">
                    <path d="M12 2.13c-2.71 0-3.42.01-4.62.07-1.2.06-1.93.28-2.62.6a4.83 4.83 0 0 0-1.88 1.5 4.83 4.83 0 0 0-1.5 1.88c-.32.69-.54 1.42-.6 2.62C2.01 8.58 2 9.29 2 12s.01 3.42.07 4.62c.06 1.2.28 1.93.6 2.62a4.83 4.83 0 0 0 1.5 1.88 4.83 4.83 0 0 0 1.88 1.5c.69.32 1.42.54 2.62.6 1.2.06 1.91.07 4.62.07s3.42-.01 4.62-.07c1.2-.06 1.93-.28 2.62-.6a4.83 4.83 0 0 0 1.88-1.5 4.83 4.83 0 0 0 1.5-1.88c.32-.69.54-1.42.6-2.62.06-1.2.07-1.91.07-4.62s-.01-3.42-.07-4.62c-.06-1.2-.28-1.93-.6-2.62a4.83 4.83 0 0 0-1.5-1.88 4.83 4.83 0 0 0-1.88-1.5c-.69-.32-1.42-.54-2.62-.6-1.2-.06-1.91-.07-4.62-.07zM12 0c2.75 0 3.48.01 4.7.07 1.37.07 2.16.3 2.82.64.66.34 1.2.78 1.85 1.85.34.66.57 1.45.64 2.82.06 1.22.07 1.95.07 4.7s-.01 3.48-.07 4.7c-.06 1.37-.3 2.16-.64 2.82a4.36 4.36 0 0 1-1.85 1.85c-.66.34-1.45.57-2.82.64-1.22.06-1.95.07-4.7.07s-3.48-.01-4.7-.07c-1.37-.06-2.16-.3-2.82-.64a4.36 4.36 0 0 1-1.85-1.85c-.34-.66-.57-1.45-.64-2.82-.06-1.22-.07-1.95-.07-4.7s.01-3.48.07-4.7c.06-1.37.3-2.16.64-2.82a4.36 4.36 0 0 1 1.85-1.85c.66-.34 1.45-.57 2.82-.64C8.52.01 9.25 0 12 0z" />
                    <path d="M12 5.65a6.35 6.35 0 1 0 0 12.7 6.35 6.35 0 0 0 0-12.7zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm5-11.18a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-2" style={{ backgroundColor: 'rgba(27, 25, 25, 0.2)', height: "40px", paddingTop: "10px" }}>
              © <b>2024 Copyright :</b>
              <a className="text-white" href="/"> &nbsp;<b>Excalibur.com</b></a><br></br></div>
    </footer>
  );
}

export default Footer;
