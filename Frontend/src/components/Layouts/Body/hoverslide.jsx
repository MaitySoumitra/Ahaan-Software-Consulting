<section class="industry">
    <h1>Our <span>Process</span></h1>
    <div class="flex-container">
      <div class="flex-slide home-2">
          <div class="flex-title flex-title-home">UI/UX Design</div>
          <div class="flex-about flex-about-home"><p>To ensure a seamless user experience with a visually appealing design, we define the Information Architecture and Workflow, develop Style Guides, create Wireframes and Mockups, and build Prototypes.</p></div>
      </div>
      <div class="flex-slide about">
          <div class="flex-title">Development</div>
          <div class="flex-about"><p>Upon defining the scope of work, we engage our skilled and specialized developers for Front-End, Back-End/Server Technology and API Development.</p></div>
      </div>
      <div class="flex-slide insurance">
          <div class="flex-title">Testing</div>
          <div class="flex-about"><p>To make sure that the final product is usable, secure and stable, we conduct thorough QA (quality assurance)testing. This process involves UX testing, performance testing, functional testing, security testing, platform and device testing.</p>
          </div>
      </div>
      <div class="flex-slide travel">
        <div class="flex-title">Support & Optimization</div>
        <div class="flex-about"><p>Time to deliver the end product to our client! Our experts provide 90 days of support for fixing issues/bugs, in case reported any. We pay heed to our clients’ queries or concerns with sincerity for feature enhancement, version upgrade and more!</p>
        </div>
     </div>
  </div>
      
  
  </section>

  
.industry span{
    color:#cb912a;
  }
  @media screen and (max-width: 768px) {
    .flex-container {
      flex-direction: column;
    }
    
  }
  
  .flex-title {
    
    color: #f1f1f1;
    position: relative;
    font-size: 45px;
    margin: auto;
    text-align: center;
    transform: rotate(90deg);
    top: 15%;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
  }
  @media screen and (max-width: 768px) {
    .flex-title {
      transform: rotate(0deg) !important;
      font-size: 20px ;
    }
  }
  
  .flex-about {
    opacity: 0;
    color: #f1f1f1 !important;
    position: relative;
    width: 70%;
    font-size: 2vw;
    padding: 5%;
    top: 20%;
    border: 2px solid #cb912a;
    border-radius: 10px;
    line-height: 1.3;
    margin: auto;
    text-align: left;
    transform: rotate(0deg);
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
  }
  @media screen and (max-width: 768px) {
    .flex-about {
      padding: 0%;
      border: 0px solid #f1f1f1;
      
    }
  }
  
  .flex-slide {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    cursor: pointer;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
  }
  @media screen and (max-width: 768px) {
    .flex-slide {
      overflow: auto;
      overflow-x: hidden;
    }
  }
  
  @media screen and (max-width: 768px) {
    .flex-slide p {
      font-size: .8em;
    }
  }
  
  @media screen and (max-width: 768px) {
    .flex-slide ul li {
      font-size: 2em;
    }
  }
  
  .flex-slide:hover {
    -webkit-flex-grow: 3;
    flex-grow: 3;
  }
  
  .home-2 {
  
   padding-top: 5%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/ui.webp");
    background-size: cover;
    background-position: center center ;
    background-attachment: local;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 768px) {
    .home-2 {
      animation: aboutFlexSlide 3s 1;
      animation-delay: 0s;
    }
  }
  
  @keyframes aboutFlexSlide {
    0% {
      -webkit-flex-grow: 1;
      flex-grow: 1;
    }
    50% {
      -webkit-flex-grow: 3;
      flex-grow: 3;
    }
    100% {
      -webkit-flex-grow: 1;
      flex-grow: 1;
    }
  }
  @media screen and (min-width: 768px) {
    .flex-title-home {
      transform: rotate(90deg);
      top: 15%;
      animation: aboutFlexSlide 3s 1;
      animation-delay: 0s;
    }
  }
  
  @keyframes homeFlextitle {
    0% {
      transform: rotate(90deg);
      top: 15%;
    }
    50% {
      transform: rotate(0deg);
      top: 15%;
    }
    100% {
      transform: rotate(90deg);
      top: 15%;
    }
  }
  .flex-about-home {
    opacity: 0;
  }
  @media screen and (min-width: 768px) {
    .flex-about-home {
      animation: aboutFlexSlide 3s 1;
      animation-delay: 0s;
    }
  }
  
  @keyframes flexAboutHome {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .about {
    padding-top: 5%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/development.jpg");
    background-size: cover;
    background-position: center center;
    background-attachment: local;
    background-repeat: no-repeat;
  }
  
  .contact-form {
    width: 100%;
  }
  
  input {
    width: 100%;
  }
  
  textarea {
    width: 100%;
  }
  
  .insurance {
    padding-top: 5%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/testing.JPG");
    background-size: cover;
    background-position: center center;
    background-attachment: local;
    background-repeat: no-repeat;
  }
  
  .travel {
    padding-top: 5%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/support.jpg");
    background-size: cover;
    background-position: center center;
    background-attachment: local;
  }
  
  
    