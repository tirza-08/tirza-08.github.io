const inactivityDuration = 120000; // 2 minuten
let inactivityTimeout;

const resetInactivityTimer = () => {
  console.log(inactivityTimeout);
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(() => {
    window.location.href = 'index.html'; 
  }, inactivityDuration);
};

document.addEventListener('DOMContentLoaded', resetInactivityTimer);

document.addEventListener('click', resetInactivityTimer);
