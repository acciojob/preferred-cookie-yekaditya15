
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

// Function to set a cookie with a given name and value
function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

// Load preferences from cookies if they exist
function loadPreferences() {
  const savedFontSize = getCookie('fontsize');
  const savedFontColor = getCookie('fontcolor');

  if (savedFontSize) {
    document.getElementById('fontsize').value = savedFontSize;
    document.documentElement.style.setProperty('--fontsize', savedFontSize + 'px');
  }

  if (savedFontColor) {
    document.getElementById('fontcolor').value = savedFontColor;
    document.documentElement.style.setProperty('--fontcolor', savedFontColor);
  }
}

// Event listener to handle the form submission
document.getElementById('preferences-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const fontSize = document.getElementById('fontsize').value;
  const fontColor = document.getElementById('fontcolor').value;

  // Save the preferences in cookies
  setCookie('fontsize', fontSize);
  setCookie('fontcolor', fontColor);

  // Apply changes to the page
  document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
  document.documentElement.style.setProperty('--fontcolor', fontColor);
});

// Load the preferences when the page loads
window.onload = loadPreferences;
