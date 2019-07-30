function showCount() {
    let input = document.getElementById('input').value;

    // console.log(input);

    let count = -1;
    let char = input[0];
    let str = "";
    for (let i = 0; i < input.length; i++) {
        if (char == input[i]) {
            ++count;
            if (i == (input.length - 1)) {
                str = str + (char + (count + 1));
            }
        }
        else {
            if (count > 0) {
                str = str + (char + (count + 1));
                // console.log(char + count);
            }
            else {
                str = str + char;
            }

            count = 0;
            char = input[i];
        }
        // console.log(count + " " + input[i]);
    }

    // console.log(str);
    document.getElementById('output').innerHTML = str;
}

function findUnionInter() {
    let input1 = document.getElementById('input1').value.split(",");
    let input2 = document.getElementById('input2').value.split(",");

    // console.log(input1);
    let union = [];
    // console.log(union);
    for(let i=0; i<input1.length; i++) {
        if(union.indexOf(input1[i]) < 0) {
            union.push(input1[i]);
        }
    }

    for(let i=0; i<input2.length; i++) {
        if(union.indexOf(input2[i]) < 0) {
            union.push(input2[i]);
        }
    }

    let result = "";
    result += "Union: " + union.toString() + "<br>";

    let inter = [];

    for(let i=0; i<input1.length; i++) {
        if(input2.indexOf(input1[i]) >= 0) {
            if(inter.indexOf(input1[i]) < 0) {
                inter.push(input1[i]);
            }
        }
    }

    // console.log(inter);
    result += "Intersecction: " + inter.toString();

    document.getElementById('output').innerHTML = result;
}

function countVowels() {
    let input = document.getElementById('input').value;
    let counts = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };

    input = input.toLowerCase();

    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' || input[i] == 'u') {
            counts[input[i]] += 1;
        }
    }

    let result = "";
    for (let key in counts) {
        result += key + " " + counts[key] + "<br>";
    }

    // console.log(result);
    document.getElementById('output').innerHTML = result;
}


function validate() {
    let name = document.getElementById('name').value;
    let mobile = document.getElementById('mobile').value;
    let email = document.getElementById('email').value;
    let city = document.getElementById('city').value;
    let pin = document.getElementById('pin').value;

    let isErr = false;
    let errMsg = "Please Enter following details correctly -";
    if (!(/^[a-zA-Z][a-zA-Z\ ]*$/.test(name))) {
        isErr = true;
        errMsg += "\n- Enter a valid name with alphabates only.";
    }
    if (!(/^[9876][0-9]{9}$/.test(mobile))) {
        isErr = true;
        errMsg += "\n- Enter a valid mobile number of 10 digits and starting with 9,8,7 or 6.";
    }
    if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
        isErr = true;
        errMsg += "\n- Enter a valid email address.";
    }
    if (!(/^[a-zA-Z][a-zA-Z\ ]*$/.test(city))) {
        isErr = true;
        errMsg += "\n- Enter a valid city name.";
    }
    if (!(/^[0-9]{6}$/.test(pin))) {
        isErr = true;
        errMsg += "\n- Enter a valid pin code.";
    }

    if (isErr) {
        alert(errMsg);
    }
}

function findMinMax() {
    let input = document.getElementById('input').value;

    let arr = input.split(",");

    let result = "";

    let len = arr.length;

    arr.sort(function (a, b) { return a - b });

    // console.log("Min: " + arr[0]);
    // console.log("Max: " + arr[len - 1]);

    result = result + "Max: " + arr[len - 1] + "<br>";
    result = result + " Min: " + arr[0] + "<br>";

    let m = -1;
    if (len % 2 == 0) {
        m = (Number(arr[len / 2] - 1) + Number(arr[(len / 2)])) / 2;
    }
    else {
        // console.log(arr[(len + 1) / 2]);
        m = Number(arr[((len + 1) / 2) - 1]);
    }

    // console.log("median: " + m);
    result = result + " Median: " + m + "<br>";
    // console.log(arr);

    document.getElementById('output').innerHTML = result;
}