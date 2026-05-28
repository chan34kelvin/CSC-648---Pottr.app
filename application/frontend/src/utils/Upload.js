const Upload = {};

Upload.getAllInfoForCompetition = (cards) => {

};

Upload.getId = (cards, access, get, item) => {

    //get the id from the given name value in item
    for(let i=0; i< cards.length; i+=1){
        const current= cards[i]
        if(current[access] == item){
            return current[get]
        }
    }
    return null
}

Upload.uploadValidation = (states) => {

    const keyToId= "Valid"
    let ifValid= true
    for(let key in states){
        if(states[key] === ""){
            document.getElementById(key+keyToId).style = "color: red"
            document.getElementById(key+keyToId).innerHTML= "Please do not leave it empty"
            ifValid= ifValid && false
        }else{
            ifValid= ifValid && true
            document.getElementById(key+keyToId).style = "color: green"
            document.getElementById(key+keyToId).innerHTML= "Valid"
        }
    }

    return ifValid
}


module.exports = Upload;