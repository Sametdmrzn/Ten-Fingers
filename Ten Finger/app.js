const textToType = document.getElementById('text-to-type');
const inputArea = document.getElementById('input-area');
const startButton = document.getElementById('start-button');
const keyboard = document.getElementById('keyboard');
const feedback = document.getElementById('feedback');

const texts = [
  "Bu yazıyı doğru şekilde yazmaya çalışın.",
  "JavaScript öğrenmek çok eğlenceli!",
  "Web geliştirme için birçok araç ve kütüphane var.",
  "10 parmak yazmak hız kazandırır ve daha verimli çalışmanızı sağlar."
];

let currentText = '';
let userInput = '';
let isTyping = false;

const createKeyboard = () => {
  const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇĞİÖŞÜabcdefghijklmnopqrstuvwxyzçğıöşü1234567890!@#$%^&*()_+-=[]{}|;:,.<>?/';
  keyboard.innerHTML = ''; // Klavyeyi sıfırla

  keys.split('').forEach(key => {
    const button = document.createElement('button');
    button.textContent = key;
    button.classList.add('keyboard-button');
    keyboard.appendChild(button);
  });
};

const startGame = () => {
  currentText = texts[Math.floor(Math.random() * texts.length)];
  textToType.textContent = currentText;
  inputArea.value = '';
  feedback.textContent = '';
  createKeyboard();
  inputArea.disabled = false;
  inputArea.focus();
  isTyping = true;
};

const checkTyping = () => {
  userInput = inputArea.value;
  const currentChar = userInput[userInput.length - 1];

  // Klavye butonuna "aktif" sınıfını ekle
  const keys = document.querySelectorAll('.keyboard-button');
  keys.forEach(key => {
    if (key.textContent === currentChar) {
      key.classList.add('active');
    } else {
      key.classList.remove('active');
    }
  });

  // Kullanıcı doğru yazdıysa
  if (userInput === currentText) {
    feedback.textContent = 'Tebrikler, doğru yazdınız!';
    inputArea.disabled = true;
    isTyping = false;
  }
};

startButton.addEventListener('click', startGame);
inputArea.addEventListener('input', checkTyping);
