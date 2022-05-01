const reverseString = () => {
    const str = document.getElementById('reverse').value;
    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    document.getElementById('showData').value = newString ;

}