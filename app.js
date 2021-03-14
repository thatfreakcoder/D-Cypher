document.addEventListener('DOMContentLoaded', () => {

    var encrypt = document.getElementById("encrypted")
    var decrypt = document.getElementById("decrypted")

    function getRotorValues() {
        rotor1 = parseInt(document.getElementById('rotor1').value)
        rotor2 = parseInt(document.getElementById('rotor2').value)
        rotor3 = parseInt(document.getElementById('rotor3').value)
        return rotor1, rotor2, rotor3
    }

    function lightBulbOn(alphabet) {
        div = document.getElementById(alphabet.toUpperCase())
        div.style.backgroundColor = "red"
    }

    function temp(rotor1, rotor2, rotor3, keyInt) {
        r1_in = rotor1 + keyInt
        if (r1_in > 26) {
            r1_in -= 26
        }
        r1_out = ROTOR1_CONFIG_ENC[r1_in]
        r2_in = r1_out - rotor2
        if (r2_in <= 0) {
            r2_in += rotor2
        }
        r2_out = ROTOR2_CONFIG_ENC[r2_in]
        r3_in = r2_out - rotor3
        if (r3_in <= 0) {
            r3_in += rotor3
        }
        r3_out = ROTOR3_CONFIG_ENC[r3_in]
        console.log("Rotor 1 Input: " + r1_in + "\nRotor 1 Output: " + r1_out + "\nRotor 2 Input: " + r2_in + "\nRotor 2 Output: " + r2_out + "\nRotor 3 Input: " + r3_in + "\nRotor 3 Output: " + r3_out);
        console.log("Final Word: " + int2word[r3_out]);
        decrypt.value += int2word[r3_out];
    }

    function turnNextRotor() {
        document.getElementById('rotor1').value++;
        if (document.getElementById('rotor1').value > 26) {
            document.getElementById('rotor1').value = 1;
            document.getElementById('rotor2').value++;
        }
        if (document.getElementById('rotor2').value > 26) {
            document.getElementById('rotor2').value = 1;
            document.getElementById('rotor3').value++;
        }
    }

    function runEnigma(ev) {
        if (ev.keyCode >= 65 && ev.keyCode <= 90) {
            console.log(ev);
            keyPressed = ev.key.toUpperCase()
            keyInt = parseInt(ev.keyCode) - 64
            rotor1, rotor2, rotor3 = getRotorValues()
            console.log(rotor1, rotor2, rotor3, keyPressed, keyInt)
            lightBulbOn(keyPressed)
            temp(rotor1, rotor2, rotor3, keyInt)
            turnNextRotor()
        }
    }

    function lightBulbOff(ev) {
        if (ev.keyCode >= 65 && ev.keyCode <= 90) {
            div = document.getElementById(ev.key.toUpperCase())
                // console.log(div);
            div.style.backgroundColor = "yellow"
            decrypt.innerText = encrypt.value

        }
    }

    encrypt.addEventListener('keydown', runEnigma)
    encrypt.addEventListener('keyup', lightBulbOff)

})