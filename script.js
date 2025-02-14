
function Message(name, message, picture) {
    this.name = name;
    this.message = message;
    this.picture = picture;
  }
  
  
  const textData = `
  Fah: "You bring the laugh and safe place to be myself! Either Dancing or yapping or dying", val1.png
  Kusum: "My wine 🍷 where i don't need anything more to feel high when life gets me down", val3.png
  Karina: "The kindest and softest person ever, a friend that remind me that I am never alone!", val4.png
  Fatma: "You make everywhere you stand feel like home <3", val5.png
  Moira: "How lucky i am to have met a beautiful, kind, smart person like you <3?", val6.png
  `;
  

  function parseMessages(text) {
    const lines = text.trim().split("\n");
    const messages = [];

    const regex = /^(.+?):\s*["'](.+?)["']\s*,\s*["']?(.+?)["']?$/;
    
    lines.forEach(line => {
      const match = line.match(regex);
      if (match) {
        const name = match[1].trim();
        const message = match[2].trim();
        const picture = match[3].trim();
        messages.push(new Message(name, message, picture));
      }
    });
    return messages;
  }
  
  const messages = parseMessages(textData);
  
  function createEnvelopeElement(messageObj) {
    const envelope = document.createElement("div");
    envelope.classList.add("envelope");
    
   
    envelope.style.animationDelay = `${Math.random() * 0.5}s`;
    

    const caption = document.createElement("p");
    caption.textContent = messageObj.name;
    envelope.appendChild(caption);
    
    
    envelope.addEventListener("click", () => envelopeClicked(messageObj));
    return envelope;
  }
  
  
  function envelopeClicked(messageObj) {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    
    popupContent.innerHTML = `
      <h2>${messageObj.name}</h2>
      <img src="ressources/${messageObj.picture}" alt="${messageObj.name}" />
      <p>${messageObj.message}</p>
      <button id="close-popup">Close</button>
    `;
    
    popup.style.display = "flex";
    
    document.getElementById("close-popup").addEventListener("click", () => {
      popup.style.display = "none";
    });
  }
  

  document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    messages.forEach(msg => {
      const envelopeEl = createEnvelopeElement(msg);
      gallery.appendChild(envelopeEl);
    });
  });
  