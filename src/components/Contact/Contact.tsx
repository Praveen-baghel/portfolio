import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>Please get in touch with me</h2>
        <p>If you have seen my potential or want to talk to me, do not hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="praveenbaghel88990@gmail.com">praveenbaghel88990@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+91 8865838039">+91 8865838039</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}