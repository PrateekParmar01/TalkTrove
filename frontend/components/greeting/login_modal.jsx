import React from 'react';
import { Link } from 'react-router-dom';
// import LoginFormContainer from '../session_form/login_form_container';
import { withRouter } from 'react-router-dom';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    componentDidMount() {
        
        const modal = document.getElementById("myModal");

        // Get the button that opens the modal
        const btn = document.getElementById("login-button");

        // Get the <span> element that closes the modal
        const span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal 
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    renderErrors() {
        debugger
        if (this.props.formType === "login") {

            return (
                <ul className="error-pop-ups">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render() {
        return (
            < div id = "myModal" className = "modal" >
                {/* Modal content */ }
                < div className = "modal-content" >
                    <span className="close">&times;</span>

                    <form onSubmit={this.handleSubmit} className={`${this.props.formType}-form-box`}>
                        <h1>Login</h1>
                        {this.renderErrors()}
                        <div className={`${this.props.formType}-form`}>
                            <label>
                                <input type="text"
                                    placeholder="Email Address"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className={`${this.props.formType}-input`}
                                />
                            </label>

                            <label>
                                <input type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className={`${this.props.formType}-input`}
                                />
                            </label>

                            <input className={`${this.props.formType}-submit`} type="submit" value="Login" />
                        </div>
                    </form>
                    
                </div >
            </div >
        )
    }
};


export default withRouter(LoginModal);
