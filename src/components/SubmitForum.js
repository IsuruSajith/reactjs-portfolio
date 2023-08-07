import React from 'react'

const openSubmitForumPopup = () => {

  const popupWindow = window.open('', '_blank', 'width=400,height=300');

  if (popupWindow) {
    const popupContent = (
        <div>
          <h2>Submit Your Data</h2>
        </div>
    );
    popupWindow.document.body.innerHTML = popupContent;
  }
};

export default openSubmitForumPopup;
