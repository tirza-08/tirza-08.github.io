const inactivityDuration = 180000; // 3 minuten
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