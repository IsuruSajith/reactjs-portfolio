import ReactDOM from 'react-dom';
import BootstrapForm from "./FormExample";
import 'bootstrap/dist/css/bootstrap.min.css'
import FormExample from "./FormExample";

const openSubmitForumPopup = () => {

    const popupWindow = window.open('', '_blank', 'width=400,height=300');

    if (popupWindow) {
        const popupContainer = popupWindow.document.createElement('div');
        popupContainer.className = 'popup-container';

        const popupContent = (
            <div>
            <div className="popup-container">
                <h2 className="popup-title">Submit Your Data</h2>

            </div>
                <FormExample/>
            </div>

        );
        ReactDOM.render(popupContent, popupContainer);
        popupWindow.document.body.appendChild(popupContainer);
    }
};

export default openSubmitForumPopup;