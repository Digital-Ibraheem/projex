# Projex - Student Project Collaboration Platform

A modern web platform built with **Next.js (frontend)** and **Flask (backend)** that connects CS/SWE students for collaborative project development. **Projex** aims to bridge the gap between academic learning and real-world experience by facilitating project-based learning and team collaboration.

## 🎯 Mission

To empower **CS and Software Engineering students** to gain **practical experience** through collaborative projects, helping them build **portfolios** and develop essential **teamwork skills** in a real-world context.

## ⚡ Tech Stack

### **Frontend**
- **Framework**: Next.js 15.1 (React-based)
- **Styling**: TailwindCSS
- **Authentication**: Email/Password + Google OAuth (planned)
- **UI Components**: Custom-built with Geist font integration
- **Development**: TurboPack for fast builds

### **Backend**
- **Framework**: Flask (Python)
- **Database**: PostgreSQL (planned)
- **Authentication**: Flask-JWT for secure user authentication
- **API**: RESTful API endpoints for project and user management
- **Deployment**: Render, Railway, or AWS (TBD)

## 🚀 Key Features

### **MVP Features**
- User Profiles with skill tracking
- Project idea posting and discovery
- Skill-based project matching
- Secure authentication system
- REST API for frontend-backend communication

### **Future Enhancements**
- GitHub integration for project tracking
- AI-powered project matching
- Team collaboration tools (chat, Kanban boards)
- Recruiter portal for connecting students with opportunities

## 🛠️ Getting Started

### **Frontend Setup**
1. Clone the repository and navigate to the frontend directory:
   ```bash
   git clone https://github.com/yourusername/projex.git
   cd projex/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view the application.

### **Backend Setup**
1. Navigate to the backend directory:
   ```bash
   cd projex/backend
   ```
2. Set up a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Mac/Linux
   venv\Scripts\activate     # Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
5. Run the Flask server:
   ```bash
   flask run
   ```
6. The backend will be available at [http://127.0.0.1:5000](http://127.0.0.1:5000).

---

## 📁 Project Structure

```
projex/
├── frontend/            # Next.js frontend
│   ├── src/
│   │   ├── app/        # Next.js App Router
│   │   │   ├── (auth)/ # Authentication routes
│   │   │   ├── ideas/  # Project ideation features
│   │   │   └── page.tsx # Landing page
│   │   ├── components/ # Reusable components
│   ├── public/         # Static assets
│   ├── tailwind.config.ts # TailwindCSS configuration
│   └── package.json    # Dependencies
│
├── backend/             # Flask backend
│   ├── app/
│   │   ├── models.py   # Database models
│   │   ├── routes.py   # API endpoints
│   │   ├── auth.py     # Authentication logic
│   │   ├── config.py   # Environment config
│   │   ├── __init__.py # App initialization
│   ├── migrations/     # Database migrations
│   ├── .env.example    # Environment variables
│   ├── requirements.txt # Python dependencies
│   └── run.py          # Entry point for Flask app
│
├── README.md           # Project documentation
└── .gitignore          # Files to ignore in Git
```

---

## 🔗 Links

- **Live Demo** (Coming Soon)
- **API Documentation** (Coming Soon)
- **Frontend Repository** (Coming Soon)
- **Backend Repository** (Coming Soon)

## 👥 Target Audience

- CS/SWE students
- Coding bootcamp graduates
- Beginner developers
- Student project teams
- Tech mentors

## 📞 Contact

For questions or support, please reach out to **[ibraheemd101@gmail.com](mailto:ibraheemd101@gmail.com)**.

