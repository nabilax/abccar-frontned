import React, { Component } from 'react';
import axios from 'axios';
// import { AuthContext } from 'path-to-your-auth-context'; // Import the AuthContext
// import { AuthContext } from './AuthContext';

class MessageSender extends Component {
  constructor(props) {
    super(props);
    this.inputTextRef = React.createRef();
    this.state = {
      success: '',
    };
  }

//   onSubmitHandler = (e) => {
//     e.preventDefault();
//     const inputText = this.inputTextRef.current.value;
//     const { name } = this.context; // Access the authenticated user's name from the context

//     axios
//       .post(`http://localhost:9090/messages/tubacpscr12`, {
//         text: inputText,
//       })
//       .then((res) => {
//         this.setState({ success: 'SUCCESS' });
//       })
//       .catch((err) => {
//         console.log(err.message);
//         this.setState({ success: 'Error' });
//       });

//     this.inputTextRef.current.value = '';
//   }

onSubmitHandler = (e) => {
    e.preventDefault();
    const inputText = this.inputTextRef.current.value;
  
    axios
      .post('http://localhost:9090/messages/tubacpscr12', {
        text: inputText,
      })
      .then((res) => {
        this.setState({ success: 'SUCCESS' });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({ success: 'Error' });
      });
  
    this.inputTextRef.current.value = '';
  }

  render() {
    const { success } = this.state;

    return (
      <div className="d-flex justify-content-center">
        <div className="form-auth">
          <h3 className="mb-3 fw-semibold text-center">Webhook Message Sender</h3>
          <form onSubmit={this.onSubmitHandler}>
            {success === 'SUCCESS' && (
              <div className="form-success text-center">Message Sent Successfully!</div>
            )}

            <input
              ref={this.inputTextRef}
              className="form-control mb-3 ps-4 pe-0"
              type="text"
              name="text"
              placeholder="Your message"
            />

            <button type="submit" className="btn btn-dark btn-auth">
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// MessageSender.contextType = AuthContext; // Set the context type for accessing the AuthContext

export default MessageSender;

// const MessageSender = () => {
//     const authCtx = useContext(AuthContext);
//     const inputTextRef = useRef();
    
//     const [success, setSuccess] = useState("");
    
//     //SUBMIT HANDLER
//     cost onSubmitHandler = (e) => {
//     e.preventDefault();
//     const inputText = inputTextRef.current.value;
    
//     axios
//     .post('http://localhost:9090/messages/${authCtx.name}', {
//     text: inputText,
//     })
//     .then((res) => {
//     setSuccess("SUCCESS");
//     })
//     .catch((err) => {
//     console.log(err.message);
//     setSuccess("Error");
//     });
    
//     inputTextRef.current.value="";
//     }
    
//     return(
//     <div className="d-flex justify-content-center">
//     <div className="form-auth">
//     <h3 className="mb-3 fw-semibold text-center">Webhook Message Sender</h3>
//     <form onSubmit={onSubmitHandler}>
//     {success === "SUCCESS" && (
//     <div className="form-success text-center">
//     Message Sent Successfully !!
//     </div>
//     )}
    
//     <input
//     ref={inputTextRef}
//     className="form-control mb-3 ps-4 pe-0"
//     type="text"
//     name="text"
//     placeholder="Your message"
//     />
    
//     <button type="submit" className="btn btn-primary btn-auth">
//     Send Message
//     </button>
//     </form>
//     </div>
//     </div>
//     );
//     }
//     export default MessageSender;