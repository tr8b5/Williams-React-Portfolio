import React from "react";

function Contact() {
  return (
    <>
      <section className="container ml-3 mt-5">
      <div className="row">
        
        <div className="col-md-8">
          <div className="jumbotron bg-white">
            
            <h1 className="display-4">Contact</h1>
            
            <hr className="my-4" />
            
            <form>
                
              <div className="form-group">
                <label for="validationDefault01">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  value="Mark"
                  required
                />
              </div>
              
              <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              
              <div className="mb-3">
                <label for="validationTextarea">Message</label>
                <textarea
                  className="form-control"
                  id="validationTextarea"
                ></textarea>
              </div>
              <button className="btn btn-success" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Contact;






