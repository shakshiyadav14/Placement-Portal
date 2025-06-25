import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext';
import styled from 'styled-components';

const Notification = () => {
    const [to, setPersons] = useState([]);
    const [message, setMessage] = useState('');
    const { setNotification, CompanyReq } = useContext(StoreContext);

    // useEffect(()=>{
    //     console.log(message);
    // },message)
    
    const handlePersonSelection = (e, person) => {
        setPersons((prevPersons) => {
            const arr = [...prevPersons];
            if (e.target.checked) {
                if (!arr.includes(person)) {
                    arr.push(person);
                }
            } else {
                const index = arr.indexOf(person);
                if (index > -1) {
                    arr.splice(index, 1);
                }
            }
            return arr;
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (to.length === 0) {
            alert("Please select whom to send the notification.");
            return;
        }
        if (message.length === 0) {
            alert("Please enter the message.");
            return;
        }
        setNotification({
            from: CompanyReq.name,
            to: to,
            message: message,
        });
        setPersons([]);
        setMessage('');
    };

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isActive) {
            const timer = setTimeout(() => setIsActive(false), 1200);
            return () => clearTimeout(timer);
        }
    }, [isActive]);
    return (
        <div className='h-screen bg-black text-white flex justify-around items-center'>
            <StyledWrapper>
                <div className='form-container'>
                    <div className='form'>
                        <h1>Notification</h1>
                        <div>
                            <div>
                                <h2>From Admin:</h2>
                            </div>
                            <div>
                                <h2>From Coordinator:</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledWrapper>
            <div>
                <StyledWrapper>
                    <div className='h-screen bg-black flex justify-center items-center'>
                        <div className="form-container">
                            <form className="form">
                                <div className="form-group">
                                    <div className="mb-4 ">
                                        <label >Send To:</label>
                                        <div className={`justify-around border  rounded-lg 
                                p-3 items-center gap-2 outline-none transition-all duration-300
                                ${isActive ? "border-[#e81cff]" : "border-gray-700"}`}>
                                            {["Admin", "Coordinator", "Selected Students", "All Students"].map((person) => (
                                                <label key={person} className="flex items-center gap-x-3 p-2 mb-2">
                                                    <input
                                                        type="checkbox"
                                                        value={person}
                                                        checked={to.includes(person)}
                                                        onChange={(e) => handlePersonSelection(e, person)}
                                                        onClick={() => setIsActive(true)}
                                                        className="w-5 h-4"
                                                    />
                                                    {person}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="mb-4">
                                        <label>Enter Message:</label>
                                        <textarea
                                            id="msg"
                                            rows={5}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Enter notification here..."
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        onClick={handleClick}
                                        className="form-submit-btn"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </StyledWrapper>
            </div>
        </div>
    );
}

const StyledWrapper = styled.div`
  .form-container {
        position: relative;
        width: 400px;
        background: #212121;
        padding: 3px;
        font-size: 14px;
        font-family: inherit;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-sizing: border-box;
        border-radius: 16px;
        z-index: 1;
        overflow: hidden; /* Prevents pseudo-element from overflowing */
    }

    /* Creating the animated border using ::before */
    .form-container::before {
        content: "";
        position: absolute;
        inset: -150%; /* Extends slightly beyond the main div */
        z-index: -1;
        border-radius: inherit;
        padding: 4px;
       background: linear-gradient(50deg, 
        transparent 0%,  /* Most of the area remains transparent */
       #8a2be2 40%, #ff69b4 55%, #1e90ff 30%,
        transparent 100% 
    );
        animation: rotateBorder 4s linear infinite;
}

    /* Smooth Rotation Animation */
    @keyframes rotateBorder {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }



  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    padding: 9px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 16px;
    background: #2c2a2d;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }


  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }


  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    width: 40%;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
  }`;

export default Notification;

