//select buttons, inputs and output
const output = document.getElementById('result');
const copyBtn = document.getElementById('copy');
const sliderValue = document.getElementById('slider-val');

const lowerCase = document.getElementById('lowercase');
const upperCase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const generateBtn = document.getElementById('generate');

// arrays
const numbers_arr = "0123456789";
const symbols_arr = "!@#$%^&*_-+=";
const alpha_lower = "abcdefghijklmnopqrstuvwxyz";
const alpha_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// start point
generateBtn.addEventListener("click", () => {

    let characters = alpha_lower;

    //check if inputs are checked
    upperCase.checked ? (characters += alpha_upper) : "";
    numbers.checked ? (characters += numbers_arr) : "";
    symbols.checked ? (characters += symbols_arr) : "";

    let len = document.getElementById("vol").value;

    // genetare password
    output.value = generatePassword(len, characters);

    // udpate length value
    sliderValue.textContent = len;
});

// generate random passwords
const generatePassword = (len, characters) => {
    let password = '';
    for (let i = 0; i < len; i++) {

        // get random characters from UTF-16 code unit
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return password;
};

// copy generated password
copyBtn.addEventListener("click", () => {
    // select and copy generated password
    let copytext = document.getElementById('result');

    //  check if result is empty
    if (copytext.value) {
        copytext.focus();
        copytext.select();
        document.execCommand("copy");
        alert(`You Password Copied "${copytext.value}"`);
    }
    else {
        alert("Please Generate Password First");
    }

});

// update length label every change
setInterval(() => {
    sliderValue.innerHTML = vol.value;
}, 0);
