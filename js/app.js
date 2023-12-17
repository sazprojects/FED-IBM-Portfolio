AOS.init({
    duration: 1500,
})


var typed = new Typed('#element', {
    strings: ['Front End Developer', 'Linux Enthusiast', 'Problem Solver'],
    typeSpeed: 75,
    backSpeed: 30,
    loop: true
});

const nav = document.querySelectorAll('.nav-item a')
const sec = document.querySelectorAll('section')
const navbar = document.getElementsByTagName('nav')[0]


let live = function (ele) {
    for (let cur of nav) {
        if (cur === ele) {
            cur.classList.add('active');
        }
        else {
            if (cur.classList[1] === 'active') {
                cur.classList.remove('active');
            }
        }
    }
}

let navcolor = function (cur) {
    if (cur === 'about' || cur === 'contact') {
        navbar.classList.add('alt')
    }
    else {
        if (navbar.classList.contains('alt')) {
            navbar.classList.remove('alt')
        }
    }
}

let click = function () {
    for (let ele of nav) {
        ele.addEventListener('click', () => live(ele));
    }
}

click();

window.onscroll = () => {
    for (let ele of sec) {
        let top = window.scrollY;
        let offset = ele.offsetTop - 91.6;
        let height = ele.offsetHeight;
        let id = ele.getAttribute('id');

        if (top >= offset && top < offset + height) {
            for (let cur of nav) {
                let cid = cur.getAttribute('href');
                let cId = cid.slice(1,);
                if (cId === id) {
                    live(cur);
                    navcolor(id);
                }
            }
        }
    }
}

const form = document.getElementById('form')

form.addEventListener('submit', async function (e) {
    e.preventDefault()
    let sndr = document.getElementById('name').value
    let mail = document.getElementById('email').value
    let sub = document.getElementById('sub').value
    let msg = document.getElementById('msg').value
    await btncls()
    await sendMail(sndr, mail, sub, msg)
    //         .then(() => window.location.href = "mailto:saz@mymails.ml?" + new FormData(form))
    //         .then(response => alert("Thank you! Your form is submitted successfully."))
    //         .catch(error => console.error('Error!', error.message))
})

let sendMail = function (a, b, c, d) {
    window.location.href = "mailto:saz@mymails.ml?name=" + a + "&email=" + b + "&subject=" + c + "&body=" + d
}

let btncls = function () {
    document.getElementsByClassName('sbmt')[0].classList.add('none');
    document.getElementsByClassName('done')[0].classList.remove('none');
    form.reset()
}