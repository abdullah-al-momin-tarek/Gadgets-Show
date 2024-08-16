# Gadgets Show Client
## Project setup
For setup this project follow the instruction properly.

### Clone the Repository
First, clone the repository to your local machine using Git. Open your terminal and run:
``` git clone https://github.com/abdullah-al-momin-tarek/Gadgets-Show-Client ```
This will create a directory named **Gadgets-Show-Client**containing all the project files.

### Navigate to the Project directory
Change your current working directory to the newly created project folder:
```cd Gadgets-Show-Client```

### Install Dependencies
The project relies on various npm packages. To install them, run:
```npm install```
This command will install all the required dependencies listed in the package.json file.

### Set Up Environment Variables
The project uses environment variables for configuration. You need to create a `.env` file in the root directory of the project. This file should contain the following environment variable for firebase authentication:
```
VITE_APIKEY=your-api-key-here
VITE_AUTHDOMAIN=your-auth-domain-here
VITE_PROJECTID=your-project-id-here
VITE_STORAGEBUCKET=your-storage-bucket-here
VITE_MESSAGINGSENDERID=your-messaging-sender-id-here
VITE_APPID=your-app-id-here
```

### Start the Development Server
Once everything is set up, you can start the development server by running:
```npm run dev```
This will start the React development server and automatically open the application in your default web browser at http://localhost:5173. The server will watch for any changes you make to the code and automatically reload the application.
