/**
 * @file Manage Confirmation Pop-up for page
 */

let confirmationOverlay;
let confirmationPopup;
let noButton;
let yesButton;

/**
 * Open the confirmation popup
 */
const openPopup = () => {
  confirmationOverlay.classList.add('active');
};

/**
 * Close the confirmation popup
 */
const closePopup = () => {
  confirmationOverlay.classList.remove('active');
};

/**
 * Initialize element variables for different elements of confirmation popup
 * @param {HTMLElement} root - confirmation popup
 * @param {() => void} onAcceptCallback - callback when confirmation is accepted
 */
const initializeElements = (root) => {
  confirmationOverlay = root;
  confirmationPopup = confirmationOverlay.querySelector('#confirmation-popup');
  noButton = confirmationPopup.querySelector('.confirmation-no-button');
  yesButton = confirmationPopup.querySelector('.confirmation-yes-button');
};

/**
 * Initialize popup
 * @param {HTMLElement} root - confirmation element
 * @param {() => void} onAcceptCallback - callback when confirmation is accepted
 */
const initializePopup = (root, onAcceptCallback) => {
  initializeElements(root);
  noButton.onmousedown = (e) => e.preventDefault();
  yesButton.onmousedown = (e) => e.preventDefault();
  yesButton.onclick = () => {
    closePopup();
    onAcceptCallback();
  };
  noButton.onclick = closePopup;
  confirmationOverlay.onclick = closePopup;
  confirmationPopup.onclick = (e) => e.stopPropagation();
};

export { initializePopup, openPopup, closePopup };
