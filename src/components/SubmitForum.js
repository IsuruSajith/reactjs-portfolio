import React from 'react'
import ReactDOM from 'react-dom';
import BootstrapForm from "./BootstrapForm";

const openSubmitForumPopup = () => {

    const popupWindow = window.open('', '_blank', 'width=400,height=300');

  if (popupWindow) {
      const popupContainer = popupWindow.document.createElement('div');
      popupContainer.className = 'popup-container';

    const popupContent = (
        <div className="popup-container">
            <h2 className="popup-title">Submit Your Data</h2>
            <form className="popup-form">
                <label>Name:</label>
                <input type="text" name="name" />
                <BootstrapForm/>
            </form>
        </div>
    );
      ReactDOM.render(popupContent, popupContainer);
      popupWindow.document.body.appendChild(popupContainer);
  }
};

export default openSubmitForumPopup;
