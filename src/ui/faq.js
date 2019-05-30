import React from 'react'
import Logo from 'ui/logo'

export default props => (
  <div { ...props }>
    <Logo>
      <h1>Noo – the password manager</h1>
    </Logo>
    <p>
      Noo is the <em>truly</em> secure password manager that stores all the data locally and never sends anything anywhere outside. There are no servers – <em>everything</em> is stored here at your device.
    </p>
    <p>
      Noo can sync your passwords across any number of devices without the internet access. As long as you know your secret, Noo can re-generate your passwords anytime you use a new device.
    </p>
    <h2>How it works?</h2>
    <p>
      Noo generates strong passwords for the websites you use. Neither the password nor the secret are sent over the internet – the whole thing happens on your device.
    </p>
    <p>
      If the same secret is given, the same domain names would render the same passwords, so this is how Noo syncs. You just enter your secret and the domain – the given password will be the same.
    </p>
    <h2>The technology behind Noo</h2>
    <p>
      There is <a href='https://nakedsecurity.sophos.com/2012/10/04/sha-3-hash-competition-concludes-keccak/' target='_blank' rel='noopener noreferrer'>
        no way to acquire your secret
      </a> from the password – the algorythm is the same as used in Etherium, so you are safe here.
    </p>
    <p>
      Noo, as well as Etherium blockchain, use the <em><a href="https://keccak.team/" target="_blank" rel="noopener noreferrer">Keccak</a></em> hash function that is pretty much <a href='https://en.wikipedia.org/wiki/SHA-3' target='_blank' rel='noopener noreferrer'>can't be predicted</a>. Thus, there is no way to decode your passwords without a secret that only you know.
    </p>
    <p className='pillbox' style={{ justifyContent: 'space-between' }}>
      <span>
        &copy; <a href='https://miloslav.website' target='_blank' rel='noopener noreferrer'>Miloslav Voloskov</a>
      </span>
      <span className='pillbox'>
        <a href='https://github.com/uyouthe/noo' target='_blank' rel='noopener noreferrer'>GitHub</a>
        <a href='https://cdn.jsdelivr.net/gh/uyouthe/noo/LICENSE' target='_blank' rel='noopener noreferrer'>Legal</a>
      </span>
    </p>
  </div>
)
