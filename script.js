function generateRandom() {
    var ans = document.getElementById("ans");
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;

    if (name1.trim() !== "" && name2.trim() !== "") {
        var rNum = Math.random() * 99;
        var fRnum = Math.floor(rNum) + 1;

        // var ans = document.getElementById("ans");
        ans.textContent = "You and Your partner "+ name2 + " has a " + fRnum + "% match"
    } else {
        // var ans = document.getElementById("ans");
        ans.textContent = "Please Enter the necessary Details!!!"
    }
}