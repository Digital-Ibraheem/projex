# Projex - Student Project Collaboration Platform

A modern web platform built with Next.js that connects CS/SWE students for collaborative project development. Projex aims to bridge the gap between academic learning and real-world experience by facilitating project-based learning and team collaboration.

## 🎯 Mission

To empower CS and Software Engineering students to gain practical experience through collaborative projects, helping them build portfolios and develop essential teamwork skills in a real-world context.

## ⚡ Tech Stack

- **Frontend**: Next.js 15.1 with TypeScript
- **Styling**: TailwindCSS
- **Authentication**: Email/Password + Google OAuth (planned)
- **UI Components**: Custom components with Geist font integration
- **Development**: TurboPack for fast builds

## 🚀 Key Features

### MVP Features
- User Profiles with skill tracking
- Project idea posting and discovery
- Skill-based project matching
- Basic collaboration tools
- Secure authentication system

### Future Enhancements
- GitHub integration
- Mentorship system
- AI-powered project matching
- Advanced project tracking
- Recruiter portal

## 🛠️ Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
or
yarn install
```

```bash
cp .env.example .env.local
```

```bash
npm run dev
or
yarn dev
```


3. Set up environment variables:

```bash
cp .env.example .env.local
``` 

4. Run the development server:

```bash
npm run dev
or
yarn dev
``` 

5. Open [http://localhost:3000](http://localhost:3000) to view the application

## 📁 Project Structure
```
frontend/
├── src/
│ ├── app/ # Next.js 13+ App Router
│ │ ├── (auth)/ # Authentication routes
│ │ ├── ideas/ # Project ideation features
│ │ └── page.tsx # Landing page
│ └── components/ # Reusable components
├── public/ # Static assets
└── tailwind.config.ts # TailwindCSS configuration
```




## 🎨 Design System

The project uses a custom design system with:
- Geist Sans and Geist Mono fonts
- Responsive design with mobile-first approach
- Dark/Light mode support
- Custom color theming through CSS variables

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- Coming Soon

## 👥 Target Audience

- CS/SWE students
- Coding bootcamp graduates
- Beginning developers
- Student project teams
- Tech mentors

## 📞 Contact

For questions or support, please reach out to [your-email@example.com](mailto:your-email@example.com)