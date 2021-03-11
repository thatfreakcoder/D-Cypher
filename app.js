var temp = []
word2int = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8,
    'I': 9,
    'J': 10,
    'K': 11,
    'L': 12,
    'M': 13,
    'N': 14,
    'O': 15,
    'P': 16,
    'Q': 17,
    'R': 18,
    'S': 19,
    'T': 20,
    'U': 21,
    'V': 22,
    'W': 23,
    'X': 24,
    'Y': 25,
    'Z': 26
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

function convert(ev) {
    console.log(ev);
    if (ev.keyCode >= 65 && ev.keyCode <= 90) {
        var rotor1 = parseInt(document.getElementById("rotor1").value)
        var rotor2 = parseInt(document.getElementById("rotor2").value)
        var rotor3 = parseInt(document.getElementById("rotor3").value)
        console.log("Content Loaded");
        key = document.getElementById((ev.key).toUpperCase())
        console.log(rotor1, rotor2, key.innerText);
        key.style.backgroundColor = "red"
        temp.push(ev.key)
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