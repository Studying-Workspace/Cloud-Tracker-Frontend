# Cloud Tracker: Frontend

## Requirements

You only need Node.js and npm installed in your environment for development purposes.

### Node installation on Linux

1. Update package lists:
   ```
   sudo apt update
   ```
2. Install Node.js and npm:
   ```
   sudo apt install nodejs npm
   ```
3. Verify the installation:
   ```
   $ node -v
   $ npm -v
   ```

### Node installation on Windows

1. Visit the official [Node.js](https://nodejs.org/) website and Download the recommended LTS version for Windows.
2. Run the Installer.
3. Accept the license agreement and click "Next".
4. Choose Installation Options:
   -  Choose the destination folder where Node.js will be installed. The default location is usually fine for most users.
   -  Select the features you want to install. Keeping the default options, including npm (Node Package Manager) is recommended.
5. Complete the Installation.
6. Verify Installation:
   -  Run the following commands:
      ```
      $ node -v
      $ npm -v
      ```

> [!important]
> You should have Node.js version 21.3.0 and npm version 10.2.4 installed at the least.

---

## Install

```
$ git clone https://github.com/Studying-Workspace/Cloud-Tracker-Frontend.git
$ cd Cloud-Tracker-Frontend
$ npm install
```

> [!note]
> You should run `npm install` after pulling changes or switching branches.

## Run and watch

```
npm run dev
```

We are running on localhost port 5731. \
Press 'o' + Enter to open in the browser. \
Press 'q' + Enter to quit.

## Run and show tests

```
npm test dev
```
