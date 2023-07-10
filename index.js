// const navToggle = document.getElementsByClassName("nav-toggle");
// console.log(navToggle);

function displayNav()
{
    const navBtn = document.getElementById("nav-bar");
    if(navBtn.style.display == 'none')
    navBtn.style.display = 'block';

    else
    navBtn.style.display = 'none';

}
