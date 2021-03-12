ROTOR1_CONFIG_ENC = {
    1: 25,
    2: 7,
    3: 12,
    4: 17,
    5: 23,
    6: 13,
    7: 16,
    8: 20,
    9: 19,
    10: 2,
    11: 8,
    12: 26,
    13: 22,
    14: 3,
    15: 21,
    16: 6,
    17: 24,
    18: 11,
    19: 1,
    20: 5,
    21: 14,
    22: 18,
    23: 9,
    24: 4,
    25: 15,
    26: 10
}

ROTOR2_CONFIG_ENC = {
    1: 1,
    2: 11,
    3: 17,
    4: 23,
    5: 25,
    6: 7,
    7: 9,
    8: 18,
    9: 14,
    10: 24,
    11: 26,
    12: 2,
    13: 21,
    14: 22,
    15: 16,
    16: 15,
    17: 12,
    18: 13,
    19: 10,
    20: 5,
    21: 8,
    22: 3,
    23: 4,
    24: 6,
    25: 20,
    26: 19
}

ROTOR3_CONFIG_ENC = {
    1: 26,
    2: 13,
    3: 18,
    4: 22,
    5: 8,
    6: 20,
    7: 19,
    8: 17,
    9: 7,
    10: 4,
    11: 21,
    12: 6,
    13: 10,
    14: 23,
    15: 24,
    16: 9,
    17: 5,
    18: 2,
    19: 15,
    20: 16,
    21: 11,
    22: 25,
    23: 1,
    24: 14,
    25: 12,
    26: 3
}

ROTOR1_CONFIG_DCR = {
    25: 1,
    7: 2,
    12: 3,
    17: 4,
    23: 5,
    13: 6,
    16: 7,
    20: 8,
    19: 9,
    2: 10,
    8: 11,
    26: 12,
    22: 13,
    3: 14,
    21: 15,
    6: 16,
    24: 17,
    11: 18,
    1: 19,
    5: 20,
    14: 21,
    18: 22,
    9: 23,
    4: 24,
    15: 25,
    10: 26
}
ROTOR2_CONFIG_DCR = {
    1: 1,
    11: 2,
    17: 3,
    23: 4,
    25: 5,
    7: 6,
    9: 7,
    18: 8,
    14: 9,
    24: 10,
    26: 11,
    2: 12,
    21: 13,
    22: 14,
    16: 15,
    15: 16,
    12: 17,
    13: 18,
    10: 19,
    5: 20,
    8: 21,
    3: 22,
    4: 23,
    6: 24,
    20: 25,
    19: 26
}
ROTOR3_CONFIG_DCR = {
    26: 1,
    13: 2,
    18: 3,
    22: 4,
    8: 5,
    20: 6,
    19: 7,
    17: 8,
    7: 9,
    4: 10,
    21: 11,
    6: 12,
    10: 13,
    23: 14,
    24: 15,
    9: 16,
    5: 17,
    2: 18,
    15: 19,
    16: 20,
    11: 21,
    25: 22,
    1: 23,
    14: 24,
    12: 25,
    3: 26
}

int2word = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
    26: 'Z'
}

function runRotors(keyCode) {
    rotor1_in = keyCode
    rotor1_out = ROTOR1_CONFIG_ENC[rotor1_in]
    console.log("rotor 1 output: " + rotor1_out);
    rotor2_in = rotor1_out
    rotor2_out = ROTOR2_CONFIG_ENC[rotor2_in]
    console.log("rotor 2 output: " + rotor2_out);
    rotor3_in = rotor2_out
    rotor3_out = ROTOR3_CONFIG_ENC[rotor3_in]
    console.log("rotor 3 output: " + rotor3_out);
    word = int2word[rotor3_out]
    console.log("final output: " + word);
}

function convert(ev) {
    if (ev.keyCode >= 65 && ev.keyCode <= 90) {
        var rotor1 = parseInt(document.getElementById("rotor1").value)
        var rotor2 = parseInt(document.getElementById("rotor2").value)
        var rotor3 = parseInt(document.getElementById("rotor3").value)
        console.log("Content Loaded");
        key_div = document.getElementById((ev.key).toUpperCase())
        key_int = ev.keyCode - 64
        console.log(rotor3, rotor2, rotor1, key_div.innerText, key_int);
        runRotors(key_int);
        key_div.style.backgroundColor = "red"
        rotor1 += 1
        document.getElementById("rotor1").value = rotor1
        if (rotor1 > 26) {
            rotor1 = 1
            rotor2++
            document.getElementById("rotor1").value = rotor1
            document.getElementById("rotor2").value = rotor2
        }
        if (rotor2 > 26) {
            rotor2 = 1
            rotor3++
            document.getElementById("rotor2").value = rotor2
            document.getElementById("rotor3").value = rotor3
        }
    }
}

function convertBack(ev) {
    if (ev.keyCode >= 65 && ev.keyCode <= 90) {
        key = document.getElementById((ev.key).toUpperCase())
        key.style.backgroundColor = "yellow"
    }
}

document.addEventListener('keydown', convert)
document.addEventListener('keyup', convertBack)