const openButton = document.querySelector("#open-button");

openButton.addEventListener('click', () => {
    const newWindow = window.open(
        'https://javascript.info/',
        '_blank',
        'width=400,height=400'
    );

    if(newWindow){
        setTimeout(() => {
            newWindow.close();
            alert("Good bye best js resource :p")
        }, 5000);
    }
});