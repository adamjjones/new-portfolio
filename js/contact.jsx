/*import React, { Component } from "react";

class contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  render() {
    const { status } = this.state;
    return (
      <form
        className="contact-form"
        onSubmit={this.submitForm}
        action="https://formspree.io/xzbdbdkj"
        method="POST"
      >
        <textarea name="message" required="required" className="form-control"></textarea>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="btn waves-effect waves-light message-btn">Send Message</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

ReactDOM.render(e(submitForm), domContainer);
const domContainer = document.querySelector('#contact');

export default contact

*/