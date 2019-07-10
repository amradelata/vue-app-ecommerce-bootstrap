<template>
  <div class="site-section bg-light" id="contact-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="section-title mb-3">Get In Touch</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-7 mb-5">

            

            <form action="#" class="p-5 bg-white">
              
              <h2 class="h4 text-black mb-5">Contact Form</h2> 

              <div class="row form-group">
                <div class="col-md-6 mb-3 mb-md-0">
                  <label class="text-black" for="fname">First Name</label>
                  <input type="text" id="fname" class="form-control rounded-0">
                </div>
                <div class="col-md-6">
                  <label class="text-black" for="lname">Last Name</label>
                  <input type="text" id="lname" class="form-control rounded-0">
                </div>
              </div>

              <div class="row form-group">
                
                <div class="col-md-12">
                  <label class="text-black" for="email">Email</label> 
                  <input type="email" id="email" class="form-control rounded-0">
                </div>
              </div>

              <div class="row form-group">
                
                <div class="col-md-12">
                  <label class="text-black" for="subject">Subject</label> 
                  <input type="subject" id="subject" class="form-control rounded-0">
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-black" for="message">Message</label> 
                  <textarea name="message" id="message" cols="30" rows="7" class="form-control rounded-0" placeholder="Write your notes or questions here..."></textarea>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <input type="submit" value="Send Message" class="btn btn-primary mr-2 mb-2">
                </div>
              </div>

  
            </form>
          </div>
        
        </div>
        
      </div>
    </div>
</template>

<style scoped>


.section-title {
    color: #000;
    font-size: 40px;
    font-weight: 900;
}
 
label{
float: left;
line-height: 1.7;
color: gray;
font-weight: 300;
font-size: 1rem;
}
.form-control,
textarea.form-control{
    border-radius: 3px !important
}
.btn.btn-primary{
    font-size: 16px;
    border-radius: 30px;
    padding: 10px 30px;
    border-width: 2px;
    background: #00d2b5;
    border-color: #00d2b5;
    color: #fff;
    -webkit-box-shadow: 0 4px 20px -5px rgba(0, 210, 181, 0.4);
    box-shadow: 0 4px 20px -5px rgba(0, 210, 181, 0.4);
}
.btn.btn-primary:hover{
color: #000;
background: #fff;
transition: 0.36s
}
</style>
