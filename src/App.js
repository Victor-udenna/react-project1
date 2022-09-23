import "./App.css"
import app_logo from './images/app-logo.svg';
import main_img from './images/cloud computing.webp';
import homeIcon from './images/house-door-fill.svg';
import facebook_icon from './images/facebook-f.svg';
import google_icon from './images/icons8-google.svg';
import apple_icon from './images/apple.svg'
import footericon_facebook from './images/square-facebook.svg';
import footericon_twitter from './images/square-twitter.svg';
import footericon_linkedin from './images/linkedin.svg';
function App() {
  return (
    <div className="App">
<header className="header">
<nav className="nav_bar">
        <div className="logo-container">
          <img src={app_logo} alt="app-logo" className="app-logo"/>
          <span className="logo_text"> CLOUDHub</span>

          <div className="link_container">
          <ul className="nav_link">
           <li className="link_item">
           <span>H<img  src={homeIcon}  className="home-icon"   alt="home-icon"/>me</span>  
             </li>
            <li className="link_item active">Sign up</li>
          </ul>
        </div>
        </div>
        <div className="link_container">
          <p className="log_in">Already have an account ? <button className="login_link">  Log in</button></p>
        </div>
      </nav>
</header>
<main className="main_content">
    <div className="main_img_container">
<img src={main_img} className="main_img" alt="main_image"/>
    </div>
    <section className="form_container">
    <div>
      <h1>Create account</h1>
    </div>
<form className="form">
    <div className="input_container">
   <label className="input_label"><span className="label_text">User name</span>
   <input/>
   </label>
</div>
<div className="input_container">
   <label className="input_label"><span className="label_text">Email</span>
   <input />
   </label>
   </div>
 <div className="input_subcontainer">
 <div className="input_container sub-container-item">
    <label className="input_label"><span className="label_text">Password</span>
    <input/>
    </label>
  </div>

  <div className="input_container sub-container-item">
    <label className="input_label"><span className="label_text">Confirm</span>
    <input/>
    </label>
  </div>
 </div>
<div className="checkbox">
<label className="checkbox_label"> <input type="checkbox" className="checkbox"/><span className="label_text">By creating an account, You agree to the Terms of Services and condition, and Privacy Policy</span></label>
</div>
<div className="btn_container">
<button className="createAcc_btn">Create account</button>
</div>
</form>
<div className="options">
<div className="hr-container">
<hr/>
</div>
<p>or</p>
<div className="hr-container">
<hr/>
</div>
</div>
<div className="create_account_option"> 
<button> <img src={facebook_icon} alt="facebook_icon"/><span>Continue with Facebook</span></button>
<button> <img src={google_icon} alt="google_icon"/><span>Continue with Google</span></button>
<button> <img src={apple_icon} alt="google_icon"/><span>Continue with Apple</span></button>
</div>
</section>
</main>
<footer className="footer_container">
<div className="footer_text_container">
<ul className="footer_list">
  <li className="footer_list_item"><div className="footer_logo-container">
      <img src={app_logo} alt="app-logo" className="app-logo"/>
    <span className="logo_text">CLOUDHub</span></div>
</li>
  <li className="footer_list_item">About</li>
  <li className="footer_list_item">Sign up</li>
</ul>
</div>
<div className="footer_icon_container">
<ul className="footer_list">
  <li className="footer_list_icon"><img src={footericon_facebook} alt="facebook icon"/></li>
  <li className="footer_list_icon"><img src={footericon_linkedin} alt="linkedin icon"/></li>
  <li className="footer_list_icon"><img src={footericon_twitter} alt="facebook icon"/></li>
</ul>
<div className="copy_write">
<p>© copyright 2022 cloudhub. All rights reserved.</p>
</div>
</div>
</footer>
    </div>
  );
}

export default App;
