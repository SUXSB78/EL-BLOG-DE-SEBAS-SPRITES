function openConfig() {
  document.getElementById('config-modal').classList.remove('hidden');
}

function closeConfig() {
  document.getElementById('config-modal').classList.add('hidden');
}

function saveConfig() {
  const name = document.getElementById('name-change').value;
  const photo = document.getElementById('photo-change').value;

  if (name) {
    document.getElementById('username').textContent = name;
  }

  if (photo) {
    document.getElementById('profile-pic').src = photo;
  }

  closeConfig();
}

function openPrivateChat() {
  alert("Aquí irá el chat privado con Firebase.");
}

function sendMessage() {
  const msg = document.getElementById("message-input").value;
  const div = document.createElement("div");
  div.textContent = msg;
  document.getElementById("messages").appendChild(div);
  document.getElementById("message-input").value = "";
}
