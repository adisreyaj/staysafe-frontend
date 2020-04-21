<h1 align="center">Welcome to Stay Safe 👋</h1>
<p align="center">
  <a href="https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE">
    <img alt="License: Apache License 2.0" src="https://img.shields.io/badge/license-Apache License 2.0-yellow.svg" target="_blank" />
  </a>
    <img src="https://img.shields.io/badge/Angular-v9.1.0-red" alt="angular">
  <a href="https://github.com/frinyvonnick/gitmoji-changelog">
    <img src="https://img.shields.io/badge/changelog-gitmoji-brightgreen.svg" alt="gitmoji-changelog">
  </a>
  <a href="https://twitter.com/AdiSreyaj">
    <img alt="Twitter: Adithya Sreyaj" src="https://img.shields.io/twitter/follow/AdiSreyaj.svg?style=social" target="_blank" />
  </a>
</p>

> Stay Safe is an application to track and learn about Pandemic disease and how to fight them.

StaySafe uses the power of Static Site Generation Powered by [Scully](https://github.com/scullyio/scully) to make it really fast.

![StaySafe](./src/assets/images/stay-safe.png 'Stay Safe - Track, Learn and Care')

## 🚀 Usage

Make sure you have the pre-requisites installed on your system. You can start by cloning/downloading the repo to your local system.

1. Install the dependencies of the applications

```
npm install
```

2. Configure the options in `environment.ts` file

3. Start the application using the command

```
npm run start
```

<br>

## 🛠 Environment Configuration

Two things to be configured in the `environments.ts` file are the `backend` which points to the url where the [StaySafe Back-end](https://github.com/adisreyaj/staysafe-backend) is deployed.

The other configuration is for Firebase for receiving push notifications. You can get started here [Firebase Get Started](https://firebase.google.com/docs/cloud-messaging/js/client)

```json
{
  "backend": "<staysafe_backend_url>",
  "firebase": {
    "apiKey": "<api_key>",
    "authDomain": "<auth_domain>",
    "databaseURL": "<firebase_db_url>",
    "projectId": "<project_id>",
    "storageBucket": "<storage_bucket>",
    "messagingSenderId": "<message_sender>",
    "appId": "<app_id>"
  }
}
```

<br>

<hr>

## 🤝 Contributing

Contributions, issues and feature requests are welcome.<br />
Feel free to check [issues page](https://github.com/adisreyaj/staysafe-frontend/issues) if you want to contribute.

## Author

👤 **Adithya Sreyaj**

- Twitter: [@AdiSreyaj](https://twitter.com/AdiSreyaj)
- Github: [@adisreyaj](https://github.com/adisreyaj)

👤 **Chandan R Sindhe**

- Linkedin: [Chandan Sindhe](https://www.linkedin.com/in/chandan-r-sindhe-48ba23104/)
- Behance: [@chandanrsindhe](https://www.behance.net/chandanrsindhe)

## 👍🏼 Show your support

Please ⭐️ this repository if this project helped you!

## 📝 License

Copyright © 2020 [Adithya Sreyaj](https://github.com/adisreyaj).<br />

This project is [Apache License 2.0](https://github.com/adisreyaj/staysafe-frontend/blob/master/LICENSE.md) licensed.
