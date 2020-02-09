var qr_data = data[Math.floor(Math.random() * data.length)];
console.log(qr_data);

new QRCode(document.getElementById("qr-container"), qr_data);
