import React from "react";

function About() {
  return (
    <>
     <section className="container ml-3 mt-5">
      <div className="row">
        
        <div className="col-md-8">
          <div className="jumbotron bg-white">
            
            <h1 className="display-4">About William</h1>
            
            <hr className="my-4" />
            
            <div className="row">
              
              <div className="col-12">
                <img
                  src="./assets/images/20200731-DSCF6012-2.jpg"
                  alt="William's Professional"
                  style={{width: "30%"}}
                />
                <p className="lead" style={{ width : "100%"}}>
                  William is no stranger to business, ever since the age of 11
                  he has been running business. At the age of 15 he started
                  developing gaming apps under the company FluxFire. From 15
                  years old to the present he has earned his Finance license,
                  studied business, marketing and finance, and business law in
                  college, and a built multiple businesses simultaneously. His
                  unwavering drive to compete with the biggest tech companies in
                  America, is what defines him. William is no stranger to
                  working 100+ hour weeks to reach deadlines and maximize
                  productivity. He has built networks with very influential
                  leaders in corporate America and is only beginning. His goal
                  is to provide as much value as possible to his clients by
                  implementing his wealth of knowledge and experience in
                  building successful and failed online business.
                </p>
                <p className="lead" style={{ width : "100%"}} >
                  Learn more about William and his projects, by looking through
                  the website's pages.
                </p>
                <div style={{ textAlign : "center"}} >
                <h1>Contact Me</h1>
                <p>William Hezekiah Miller III</p>
                <a href="williamhmiller12@gmail.com">
                <p>williamhmiller12@gmail.com</p>
                </a>
                <p>407-795-2964</p>
                <a href="https://www.linkedin.com/in/william-miller-8a2338168/">
                  <p>My Linkedin</p>
                </a>
                <a href="https://github.com/tr8b5">
                  <p>My Github</p>
                </a>
                <a href="./assets/images/William-Miller.pdf">
                  <p>My Resume</p>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;






