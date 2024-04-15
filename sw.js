//make sure sw is supported
if ('serviceWorker' in navigator) {
    //console.log('service Worker Supported');   //text out
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((reg) => console.log('Service Worker: Registered', reg))
            .catch((err) => console.log(`Service Worker: NOTRegistered`, err));
    });
}

document.write(column);