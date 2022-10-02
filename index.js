let panjangPassword = document.getElementById("password__Length")
let password = document.getElementById("value__password")
let saveButton =document.getElementById("save__button")

function copyText() {
  var copiedText = password
  copiedText.select()
  copiedText.setSelectionRange(0,99999)
  navigator.clipboard.writeText(copiedText.value)
}

function generatePassword(len) {
  document.title = 'Generate Password | Home'
  console.log(`Password with length ${len} will Generated..`)
  if (len!=="") {
    const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const alphabetLower = "abcdefghijklmnopqrstuvwxyz"
    const specialCharacter = "0123456789^$#@!&.*-_'"
  
    const data = alphabetUpper + alphabetLower + specialCharacter
  
    let randomPassword = ''
    for (let index=0; index<len; index++){
      randomPassword += data[Math.floor(Math.random() * data.length)]
    }
    console.log(randomPassword)
    return randomPassword
  }
  else{
    alert('Please input the length of password!')
  }
}

function getPassword() {
  const newPassword = generatePassword(panjangPassword.value)
  console.log(newPassword)
  if(!!newPassword){
    password.value = newPassword
    setTimeout(() => {
      alert('password has been generated')
    }, 500)
  }
}

const savePassword = () => {
  document.title = password.value
  let outputText = `password saya: ${document.title}`;
  console.log(outputText)
  saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(outputText));
  saveButton.setAttribute('download', 'my-password-generatorLOG.txt');
}


