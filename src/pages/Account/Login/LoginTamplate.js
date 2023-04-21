

export const loginTemplate = () =>{
		return `
      <div class="login-wrapper">
        <div class="form_wrapper">
          <h3 class="form_wrapper__crete-account">Welcome back</h3>
          <p class="form_wrapper__text">Welcome back! Please enter your details.</p>
          <form id="form-login">
 <button type="button" id="google-auth">
                <img src="/assets/svg/google.svg" alt="google">
                <span>Sign up with Google</span>
            </button>
            <div class="or-line-container">
              <div class="line"></div>
              <div class="or">or</div>
              <div class="line"></div>
            </div>
            <input type="email" id="email" name="email" placeholder="Email" autofocus>
            <input type="password" id="password" name="password" placeholder="Password">
            <button type="submit">Log in</button>
            <p>Don’t have an account ? <span class="sing-up-link">Sign up for free </span></p>
          </form>
        </div>
        <div class="show_picture">
        </div>
      </div>
    `;

	
}