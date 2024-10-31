import CryptoJS from 'crypto-js';

export default function St() {
    const stk = "7256dfc2-7a88-4b0f-8eb5-2e04232eae43";
    const stkpass = "980e06a1-41e6-45c0-9dd4-d7654fa84d1d";

    const data = {
        text: stkpass,
        time: Math.floor(Date.now() / 1000),
    };

    // Encrypt
   return CryptoJS.AES.encrypt(JSON.stringify(data), stk).toString();
}
