

export const CreateAccountTemplate = ()=>{
	return`
	 <div class="login-wrapper">
        <div class="form_wrapper">
          <h3 class="form_wrapper__crete-account">Create an account </h3>
          <p class="form_wrapper__text">Let’s go.</p>
          <form id="form-create-account">
            <input type="text" id="name" name="name" placeholder="Name" autofocus>
            <input type="email" id="email" name="email" placeholder="Email">
            <input type="password" id="password" name="password" placeholder="Password">
            <button type="submit">Create account</button>
            <button type="button" id="google-auth">
                <img src="/assets/svg/google.svg" alt="google">
            <span>Sign up with Google</span>
            </button>
            <p>Already have an account? <span class="log-in-link">Log in</span></p>
          </form>
        </div>
        <div class="show_picture">
        </div>
      </div>
	`
}