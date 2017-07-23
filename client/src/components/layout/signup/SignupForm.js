import React, { Component } from 'react';
import classnames from 'classnames';
import sharedSignupValidations from '../../../../../server/shared/signupvalidations';

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			errors: {}
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
  
  isValid() {
    const { errors, isValid } = sharedSignupValidations.commonValidations(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

	onSubmit(e) {
		e.preventDefault();
		if (this.isValid()) {
      this.setState({ errors: {} });
      this.props.userSignupRequest(this.state).then(
        () => {
			this.props.addFlashMessage({
				type: 'success',
        text: 'You signed up successfully, Welcome!'
			});
      this.context.router.push('/');
		},
        ({ data }) => this.setState({ errors: data })
      );
		}
	}

    render() {
    	const { errors } = this.state;
    	return (
		    <div className="row">
				<div className="col m8 col m offset4">
					<form onSubmit={this.onSubmit}>
						<h4 className="green-text text-darken-4 glist">Create An Account</h4>	
						<div className="container">
							<div className="row">							
								<div className={classnames("input-field col s12", { 'has-error': errors.username})}>
									<input
									id="username"
									onChange={this.onChange}
									value={this.state.username} 
									name="username" 
									type="text" 
									className="form-control" />
									<label htmlFor="username">Username</label>
									{errors.username && <span className="help-block">{errors.username}</span>}
								</div>
							</div>							
							<div className="row">
								<div className={classnames("input-field col s12", { 'has-error': errors.email})}>
									<input id="email" onChange={this.onChange} name="email" type="text" className="form-control" />
									<label htmlFor="email">Email</label>
									{errors.email && <span className="help-block">{errors.email}</span>}
								</div>
							</div>
							<div className="row">
								<div className={classnames("input-field col s12", { 'has-error': errors.password})}>
									<input id="password" onChange={this.onChange} name="password" type="password" className="form-control" />
									<label htmlFor="password">password</label>
									{errors.password && <span className="help-block">{errors.password}</span>}
								</div>
							</div>
							<div className="row">
								<div className={classnames("input-field col s12", { 'has-error': errors.passwordConfirmation})}>
									<input id="passwordConfirmation" onChange={this.onChange} name="passwordConfirmation" type="password" className="form-control" />
									<label htmlFor="passwordConfirmation">Password Confirmation</label>
                  {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
								</div>
							</div>
							<div className="row">
								<button disabled={ this.state.isLoading } className="waves-effect waves-light btn">Sign Up</button>
							</div>	
						</div>				
					</form>	
				</div>
			</div>
		)	
    }
}

SignupForm.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SignupForm