async function generateUniqueBoolean(user) {
    const uniqueString = user.login.uuid + user.email,
          encoder = new TextEncoder(),
          data = encoder.encode(uniqueString),
          hash = await window.crypto.subtle.digest('SHA-256', data),
          hashArray = Array.from(new Uint8Array(hash)),
          hasHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return parseInt(hasHex, 16) % 2 === 0;
}

export default generateUniqueBoolean;