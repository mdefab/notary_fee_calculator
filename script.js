"use strict";

const will = document.getElementById("will");
const willPagesInputContainer = document.querySelector('.willPagesInputContainer');
const mobile = document.getElementById("mobile");
const special = document.getElementById("special");
const notarizationLabel = document.querySelector("label[for='notarizations']");
const mobileLocationContainer = document.querySelector('.mobileLocationContainer');
const mobileLocationAnswer = document.querySelector('.mobileLocationAnswer');
const btnQuote = document.querySelector('.getQuote');
const quoteContainer = document.querySelector('.quoteContainer');


const willMenuHandler = function(e){
    if(e.target.value === "yes"){
        willPagesInputContainer.insertAdjacentHTML('afterbegin', 
        `<label for="pages"> Number of pages to be certified: </label> <br>
        <input type="text" id="pages" name="pages">`
        )
        notarizationLabel.textContent = "Please enter any additional notarizations besides this document: ";   
    }
    if(e.target.value === "no" || !e.target.value ){
        willPagesInputContainer.replaceChildren();
        notarizationLabel.textContent = "Notarizations required: ";
    };
};

const mobileMenuHandler = function(e){
    if(e.target.value === "yes"){
        mobileLocationContainer.insertAdjacentHTML('afterbegin', 
        `<label for="location"> Are you located in Hamilton? </label>
        <select id="location" name="location">
        <option value="">--</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
        </select> <br>`
        )
        document.getElementById("location").addEventListener("change", locationMenuHandler)
    }
    if(e.target.value === "no" || !e.target.value){
        mobileLocationContainer.replaceChildren();
    }
};


const locationMenuHandler = function(e){
    if(e.target.value ==="no"){
        mobileLocationAnswer.insertAdjacentHTML('beforeend', 
        `<p> For locations outside of Hamilton, please contact us <a href="https://www.google.com/">here</a> for a quote </p>`
        )
    }
    if(e.target.value === "yes" || !e.target.value) mobileLocationAnswer.replaceChildren();
}


const quoteGenerator = function(e){
    e.preventDefault();
    quoteContainer.replaceChildren();
    quoteContainer.insertAdjacentHTML('afterbegin', `<p>Here's your quote</p>`)
}



will.addEventListener("change", willMenuHandler);
mobile.addEventListener("change", mobileMenuHandler);
btnQuote.addEventListener("click", quoteGenerator);


