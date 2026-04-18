# 🚀 CI/CD Pipeline Project (GitHub → AWS EC2)

## 📌 Project Overview

This project demonstrates a complete deployment workflow where a static web application (HTML, CSS, JavaScript) is hosted on an AWS EC2 instance using Nginx.

The application is managed via GitHub, and updates are deployed to the server using manual Git operations (git pull).

---

## 🧩 Architecture

Local Machine → GitHub Repository → AWS EC2 → Nginx → Live Website

---

## ⚙️ Tech Stack

* AWS EC2
* Nginx Web Server
* Git & GitHub
* HTML, CSS, JavaScript
* Linux (Amazon Linux)

---

## 📁 Project Structure

```
project-root/
│── index.html
│── style.css
│── script.js
│── README.md
```

---

# 🚀 Initial Setup (First-Time Deployment)

## 1️⃣ Clone Repository Locally

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

---

## 2️⃣ Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

---

## ☁️ 3️⃣ Launch EC2 Instance

* Create EC2 instance (Amazon Linux / Ubuntu)
* Allow inbound ports:

  * 22 (SSH)
  * 80 (HTTP)

---

## 🔐 4️⃣ Connect to EC2

```bash
ssh -i your-key.pem ec2-user@<EC2-PUBLIC-IP>
```

---

## ⚙️ 5️⃣ Install Nginx

```bash
sudo yum update -y
sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

---

## 📥 6️⃣ Install Git

```bash
sudo yum install git -y
```

---

## 📂 7️⃣ Deploy Code to EC2

```bash
cd /usr/share/nginx/html
sudo git clone https://github.com/<your-username>/<repo-name>.git devops_repo
```

---

## 📦 8️⃣ Move Files to Web Root

```bash
cd /usr/share/nginx/html
sudo cp -r devops_repo/* .
```

---

## 🌐 9️⃣ Access Website

Open in browser:

```
http://<EC2-PUBLIC-IP>
```

---

# 🔄 Updating the Application (After Code Changes)

## 💻 Step 1: Update Code Locally

```bash
git add .
git commit -m "Updated UI / features"
git push origin main
```

---

## ☁️ Step 2: Update on EC2

```bash
cd /usr/share/nginx/html/devops_repo
sudo git pull origin main
```

---

## 🔁 Step 3: Reflect Changes on Website

```bash
cd /usr/share/nginx/html
sudo cp -r devops_repo/* .
```

---

## 🌐 Step 4: Refresh Website

```
http://<EC2-PUBLIC-IP>
```

---

# ⚠️ Troubleshooting

## ❌ Git error: not a repository

Make sure you are inside:

```bash
cd /usr/share/nginx/html/devops_repo
```

---

## ❌ Permission issues

```bash
sudo chown -R ec2-user:ec2-user /usr/share/nginx/html
```

---

## ❌ Changes not visible

```bash
sudo systemctl restart nginx
```

---

## ❌ Path errors

Correct path:

```bash
cd /usr/share/nginx/html
```

---

# 🧠 Key Learnings

* Hands-on experience with AWS EC2 deployment
* Understanding of Nginx web server configuration
* Git-based deployment workflow
* Debugging real-world deployment issues
* Manual CI/CD process understanding

---

# 🚀 Future Improvements

* Automate deployment using GitHub Actions
* Add HTTPS using SSL (Certbot)
* Containerize using Docker
* Use Terraform for infrastructure automation

---

# 👨‍💻 Author

Azharuddin Alam
GitHub:https://github.com/analystazhar/ 

---

# ⭐ Conclusion

This project demonstrates a foundational DevOps workflow by integrating GitHub with AWS EC2 for application deployment. It provides a strong base for implementing full CI/CD pipelines in real-world scenarios.
