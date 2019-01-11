////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
//contact form
////////////////////////////////////////////

var conf_full_name = document.querySelector('#contf_full_name');
var conf_email = document.querySelector('#contf_email');
var conf_message = document.querySelector('#contf_message');
var label1 = document.querySelectorAll('label')[0];
var label2 = document.querySelectorAll('label')[1];
var label3 = document.querySelectorAll('label')[2];
var input1 = document.querySelectorAll('input')[0];
var input2 = document.querySelectorAll('input')[1];
var textarea = document.querySelector('textarea');
var italik = document.querySelectorAll('.contact_form i')

for (var i = 0; i < italik.length ; i++) {
    italik[i].classList.remove('cChange');
}
document.addEventListener('click' , (event)=> {
    if(event.target === conf_full_name) {
        label1.classList.add('focused');
        italik[0].classList.add('cChange');
    } else {
        setTimeout(()=> {
            if(input1.value == "") {
                label1.classList.remove(('focused'))
                italik[0].classList.remove('cChange');
            } else {
                label1.classList.add('focused');
                italik[0].classList.add('cChange');
            }
        } , 10)
    }
})
document.addEventListener('keydown' , (event)=> {
    setTimeout(()=> {
        if(input1.value == "") {
            label1.classList.remove(('focused'))
            italik[0].classList.remove('cChange');
        } else {
            label1.classList.add('focused');
            italik[0].classList.add('cChange');
        }
    } , 10)
});
///////////////////////
document.addEventListener('click' , (event)=> {
    if(event.target === conf_email) {
        label2.classList.add('focused');
        italik[1].classList.add('cChange');
    } else {
        setTimeout(()=> {
            if(input2.value == "") {
                label2.classList.remove('focused');
                italik[1].classList.remove('cChange');
            } else {
                label2.classList.add('focused');
                italik[1].classList.add('cChange');
            }
        } , 10)
    }
});
document.addEventListener('keydown' , (event)=> {
    setTimeout(()=> {
        if(input2.value == "") {
            label2.classList.remove('focused');
            italik[1].classList.remove('cChange');
        } else {
            label2.classList.add('focused');
            italik[1].classList.add('cChange');
        }
    } , 10)
});
////////////////////////////////
document.addEventListener('click' , (event)=> {
    if(event.target === conf_message) {
        label3.classList.add('focused');
        italik[2].classList.add('cChange');
    } else {
        setTimeout(()=> {
            if(textarea.value == "") {
                label3.classList.remove(('focused'));
                italik[2].classList.remove('cChange');
            } else {
                label3.classList.add('focused');
                italik[2].classList.add('cChange');
            }
        } , 10)
    }
})
document.addEventListener('keydown' , (event)=> {
    setTimeout(()=> {
        if(textarea.value == "") {
            label3.classList.remove(('focused'));
            italik[2].classList.remove('cChange');
        } else {
            label3.classList.add('focused');
            italik[2].classList.add('cChange');
        }
    } , 10)
})