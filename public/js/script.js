//Carousel
function showContent(index) {
    const titles = document.querySelectorAll('.dynamic-text h3');
    const texts = document.querySelectorAll('.dynamic-text p');
    const images = document.querySelectorAll('.carousel-image');
    const additionalButtons = document.querySelectorAll('.additional-button-container');

    titles.forEach((title, i) => {
        if (i === index) {
            title.style.display = 'block';
        } else {
            title.style.display = 'none';
        }
    });

    texts.forEach((text, i) => {
        if (i === index) {
            text.style.display = 'block';
        } else {
            text.style.display = 'none';
        }
    });

    images.forEach((img, i) => {
        if (i === index) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });

    additionalButtons.forEach((btn, i) => {
        if (i === index) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });

    // Add/remove animation class for logo text
    const logo = document.querySelector('.logo');
    logo.classList.remove('logo-animation');
    void logo.offsetWidth; // Trigger reflow to restart animation
    logo.classList.add('logo-animation');
}

//Carousel Button
document.querySelectorAll('.carousel-button').forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        showContent(index);
    });
});

//Carousel links
function redirectToPage(index) {
    const urls = [
        'page1.html', // Replace with the URL for Additional Button 1
        'page2.html', // Replace with the URL for Additional Button 2
        'page3.html'  // Replace with the URL for Additional Button 3
    ];
    window.location.href = urls[index];
}

//transparent nav bar when scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-transparent');
    } else {
        nav.classList.remove('nav-transparent');
    }
});

//Redirect pages from carousel
function redirectToPage(pageNumber) {
    const pages = ['personal_loan.html', 'page2.html', 'page3.html'];
    if (pageNumber >= 0 && pageNumber < pages.length) {
        window.location.href = `../pages/${pages[pageNumber]}`;
    } else {
        console.error('Invalid page number:', pageNumber);
    }
}


// // fetches form data
// document.getElementById('loanForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const first_name = document.getElementById('firstName').value;
//     const last_name = document.getElementById('firstName').value;

//     fetch('/submit', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ first_name, last_name })
//     })
//     .then(response => response.text())
//     .then(data => {
//         alert(data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });









