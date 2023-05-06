//S U B M I T  B U T T O N
let submit = document.querySelector(".btn");

submit.addEventListener("click", (e) => {
    e.preventDefault()

    let fname = document.querySelector(".name");
    let phone = document.querySelector(".phone");
    let email = document.querySelector(".email");
    let text = document.querySelector(".textArea");

    if (fname.value == "" || phone.value == "" || email.value == "" || text.value == "") {
        alert("Are you sure you filled in everything?");
    } else {
        alert("This form has been successfully submitted!");
        console.log(
            `Person who is writting you is called: ${fname.value}. Message says: ${text.value}.`);
            fname.value = "";
            phone.value = "";
            email.value = "";
            text.value = "";
    }
    });
