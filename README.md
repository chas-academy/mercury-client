# Mercury's App Boilerplate

# Table of contents

<!--ts-->

* [Directory Layout](#directory-layout)
* [Quickstart](#quickstart)
* [Usage](#usage)
  _ [Docker](#docker)
  _ [Bash Commands](#bash-commands)
  _ [Database](#database)
  _ [Users](#users)
  <!--te-->

## Directory Layout

```bash
./
├── /public/                     # Public directory, ready to be served by a web server
├── /src/                        # Directory for the app code, a standard create-react-app with Redux and other goodies
│   ├── /assets/
│   ├── /actions/                #
│   ├── /components/             #
│   ├── /constants/              #
│   ├── /Config.dist/            #
│   ├── /containers/             #
│   ├── /reducers/               #
│   ├── /stories/                #
│   │── /views/                  #
│   ├── registerServiceWorker.js #
│   └── index.js                 #
│   └── types.js                 #
│   └── setupTests.js            #
├── .env.dist                    # Defines template for environment variables
├── docker-compose.yml           # Defines Docker services, networks and volumes, do not touch unless you know what you are doing
├── Dockerfile                   # Defines how Docker should build a custom image for the application, do not touch unless you know what you are doing
└── README.md                    # The file you are reading right now
```

## Quickstart

It's best if this is started from the project root instead of inside the api repo, but if for some reason you want to work on the App independently you can run the project from this location. Here's how to do that:

```
yarn
yarn start
```

Note: See **Bash Commands** section for Docker.

To generate the `./client/src/Assets/Styles/Style.css`,
open another terminal console then on the `root` directory of the project,
run the following command:

```
yarn run watch-css
```

The command above works only in Mac with the `fsevents` module installed.
Run the command below as an alternative:

```
yarn run build-css
```

Note: You must run the command above manually everytime you made changes to `.scss` files.
All the `*.scss` files shall be compiled to `*.css` but only the `Style.css` is included in the repository.

Access the app at <http://localhost:7771>.

# Usage

## Settings

### Environment Vars

Copy `.env.dist` to `.env` and change the values of the environment variables if needed.

```
REACT_APP_SITE_NAME=React App Boilerplate
REACT_APP_API_BASE_URL=http://localhost:7770
REACT_APP_API_SIGN_IN_URL=http://localhost:7770/sign-in
REACT_APP_API_SIGN_OUT_URL=http://localhost:7770/sign-out
REACT_APP_API_VERIFY_TOKEN_URL=http://localhost:7770/verify-token
REACT_APP_API_JWT_SECRET=jwtsecretcode
```

### Config Files

Copy `./src/Config.dist` folder to `Config` and change the configurations if needed.

## Docker

Download and install the [Docker Community Edition](https://www.docker.com/community-edition).

Note: See **Bash Commands** section for Docker.

The `yarn run watch-css` command should be running on a separate terminal console for client app.

## Bash Commands

On the `root` directory of the project, run the following commands:

Note: To view the Docker containers, open another terminal console then enter `docker ps`.

### Docker

| Command                                | Description                                                            |
| -------------------------------------- | ---------------------------------------------------------------------- |
| `./bin/install`                        | Build the Docker container and start the app                           |
| `./bin/reinstall`                      | Rebuild the Docker container with the current branch and start the app |
| `./bin/start`                          | Start the client app service                                           |
| `./bin/stop`                           | Stop the client app service                                            |
| `./bin/console <container ID or Name>` | Access the terminal console of the container                           |

### CSS

| Command           | Description                                                          |
| ----------------- | -------------------------------------------------------------------- |
| `./bin/css/watch` | Watch and compile \*.scss files on file changes (for Mac users only) |
| `./bin/css/build` | Manually compile \*.scss files                                       |

## Users

| Name              | Email                  | Description                                                                                                                                                                             |
| ----------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Super Admin User  | `superadmin@email.com` | Has wildcard access                                                                                                                                                                     |
| Admin User        | `admin@email.com`      | Has wildcard access but `Admin › Users › Delete` is excluded                                                                                                                            |
| Common User       | `user@email.com`       | Can access `My Profile`, `Admin › Dashboard`, `Users`, `Users › View, and Settings`                                                                                                     |
| Referrer User     | `referrer@email.com`   | When `redirect` is set without the domain, e.i. `/admin/dashboard`, user shall be redirected to internal page if no location path (referrer) found on the Sign In page                  |
| Redirect User     | `redirect@email.com`   | When `redirect` is set with complete URL, e.i. `https://github.com/anthub-services`, user shall be redirected to external page if no location path (referrer) found on the Sign In page |
| Blocked User      | `blocked@email.com`    | User is signed in but the account is blocked                                                                                                                                            |
| Unauthorized User | `<any invalid email>`  | Simply enter wrong `email` and/or `password`                                                                                                                                            |

## Flow and ESlint

First you need to install all the new dependencies by doing:
`yarn install`
then, while you're at it you also need to install flow globally by using
`yarn global add flow-bin`
Then predd Ctrl+, (Ord cmd+, on a mac) and add this to the preferences:
`"javascript.validate.enable": false`
Then, you need to download and add the flow-support for VC code, and restart VS Code.

# CSS/SCSS Styleguide

A few rules of special importance from [AirBnb's CSS/SCSS Styleguide](https://github.com/airbnb/css#sass)

* Do not use ID selectors
* Prefer dashes over camelCasing in class names
* Write detailed comments for code that isn't self-documenting:
  * Uses of z-index
  * Compatibility or browser-specific hacks
* Do not nest selectors more than three levels deep!

In `src/components/App/App.scss` you'll find styles applied to `<body>` and global variables, that you can use in the components `.scss` files.
