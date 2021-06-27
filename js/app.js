// image
var image = document.getElementById('img');

// all the range inputs
var greyRange = document.getElementById('greyRange');
var radiusRange = document.getElementById('radiusRange');
var borderRange = document.getElementById('borderRange');
var borderColor = document.getElementById('borderColor');



// all the output values
var grayOutput = document.getElementById("grayOutput");
var borderOutput = document.getElementById("borderOutput");
var radiusOutput = document.getElementById("radiusOutput");


// image upload functionality
function loadImage() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.getElementById('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src); // no longer needed, free memory
            }

            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
}

// calling the function of image upload functionality
window.addEventListener('load', function() {
    loadImage();
});


// grayscale functionality
greyRange.oninput = function() {
    grayOutput.innerHTML = this.value + '%';
    image.style.filter = `grayscale(${this.value + '%'})`;

}

// Border functionality
borderRange.oninput = function() {
    borderOutput.innerHTML = this.value + 'px';
    image.style.border = `${this.value + 'px'} solid`;

}

// border color functionality
borderColor.oninput = function() {
    image.style.borderColor = ` ${this.value}`;

}

// border radius functionality
radiusRange.oninput = function() {
    radiusOutput.innerHTML = this.value + '%';
    image.style.borderRadius = this.value + '%';

}

// If Horizontal flip is active other button will disabled with chunk of code
function horizontallButton() {
    if (flipRangeX.innerText != 'Flip Horizontally') {
        flipRangeY.setAttribute('disabled', true);
    } else {
        flipRangeY.disabled = false;
    }
}


// clicking on horizontal flip button will change the inner text of the button through these codes
function horizontalButtonText() {
    var flipRangeX = document.getElementById('flipRangeX');

    if (image.classList.toggle('flippedX')) {
        flipRangeX.innerText = 'Reset';
    } else {
        flipRangeX.innerText = 'Flip Horizontally';
    }
}



// If Vertical flip is active other button will disabled with chunk of code
function verticalButton() {

    if (flipRangeY.innerText != 'Flip Vertically') {
        flipRangeX.setAttribute('disabled', true);
    } else {
        flipRangeX.disabled = false;
    }
}


// clicking on vertical flip will change the inner text of the button through these codes
function verticalButtonText() {
    var flipRangeY = document.getElementById('flipRangeY')

    if (image.classList.toggle('flippedY')) {
        flipRangeY.innerText = 'Reset';
    } else {
        flipRangeY.innerText = 'Flip Vertically';
    }
}


// horizontal flip functionality
flipRangeX.addEventListener('click', function() {
    horizontalButtonText();
    horizontallButton();

})



// vertical flip functionality
flipRangeY.addEventListener('click', function() {
    verticalButtonText();
    verticalButton();


});