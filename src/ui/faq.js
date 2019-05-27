import React, { Fragment } from 'react'

export default props => (
  <Fragment>
    <h2>How it works?</h2>
    <p>
      Noo generates strong passwords for the websites you use. Neither the password nor the secret are sent over the internet – the whole thing happens on your device.
    </p>
    <p>
      If the same secret is given, the same domain names would render the same passwords, so this is how Noo syncs. You just enter your secret and the domain – the given password will be the same.
    </p>
    <p>
      There is no way to acquire your secret from the password, so you are safe here.
    </p>
  </Fragment>
)
