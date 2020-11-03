import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Realtime Chat Application</h1>
      <h2 style = {{color : "yellow"}}>Live Website Link : <a href = {"https://sweetheartrajkumar.github.io/react-project-livechat/"} target = "_blank">Click here</a> <span role="img" aria-label="emoji">❤️</span></h2>

    </div>
    {
      users
        ? (
          <div>
            <h1 style = {{color : "yellow"}}>People in chatroom :</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem" style = {{color : "pink"}}>
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;