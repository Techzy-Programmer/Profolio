const handlesEl = document.querySelectorAll('main > .handles li > div');
handlesEl.forEach(handle => handle.addEventListener('click', handleClicks));

function handleClicks() {
    let socialUrl = 'N/A';
    const socialHandle = this;
    const elClasses = [...socialHandle.classList];
    if (elClasses.includes('linkedin')) socialUrl = 'https://www.linkedin.com/in/rishabh-kumar-438751207';
    else if (elClasses.includes('github')) socialUrl = 'https://github.com/Techzy-Programmer';
    else socialUrl = 'https://www.instagram.com/rishabh0860/';
    window.open(socialUrl, 'blank');
}
