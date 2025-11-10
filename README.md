🚀 Hello World — Vercel Deployment

🧩 Description

This is a simple Node.js + Express project deployed on Vercel.
It displays the message:

“Hello World from Vercel! 🚀”

The goal of this project is to demonstrate a lightweight serverless deployment workflow using GitHub + Vercel.

🏗️ Technologies Used

Node.js (v18)

Express.js

Vercel Serverless Functions

GitHub Integration

⚙️ Project Structure
📦 hello-world-vercel
 ┣ 📜 app.js
 ┣ 📜 server.js
 ┣ 📜 package.json
 ┣ 📜 vercel.json
 ┣ 📜 README.md

💻 Run Locally

Clone the repository

git clone https://github.com/KarenGarciaDev/hello-world-vercel.git
cd hello-world-vercel


Install dependencies

npm install


Run the app

npm start


View it in the browser

http://localhost:3000

☁️ Deployment on Vercel

The project is automatically deployed from GitHub using Vercel.

Steps followed:

Connected GitHub to Vercel.

Imported the repository hello-world-vercel.

Selected framework preset: Express.

Vercel automatically built and deployed the project.

Every new commit to the main branch triggers a new deployment automatically 🎯

🌍 Public Access

You can access the live application here:
👉 https://hello-world-vercel-one-pi.vercel.app/

🔧 Key Files Explained

app.js → Defines the Express application and route /.

server.js → Adapts the app for serverless deployment using serverless-http.

vercel.json → Configures routing and build instructions for Vercel.

package.json → Contains project metadata, dependencies, and scripts.

👩‍💻 Author

Karen García
Project developed for Cloud Deployment Practice — Universidad Central del Ecuador
