# 🔍 GitHub User Search

A modern, responsive web application for searching and exploring GitHub users with detailed analytics and visualizations.

<div align="center">

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)](https://graphql.org/)

</div>

## ✨ Features

- 🔍 **Real-time GitHub User Search** - Search for any GitHub user instantly
- 📊 **Interactive Charts** - Visualize user statistics with beautiful charts
- 🏆 **Repository Analytics** - View most starred and forked repositories
- 💻 **Language Statistics** - See programming language usage breakdown
- 📱 **Responsive Design** - Works perfectly on all devices
- 🚀 **Fast Performance** - Built with Vite for lightning-fast loading
- 🎨 **Modern UI** - Clean, intuitive interface using Shadcn/UI components

## 🚀 Live Demo

[View Live Demo](https://your-demo-link.vercel.app) <!-- Replace with your actual demo link -->

## 🛠️ Tech Stack

<table>
<tr>
<td align="center"><strong>Frontend</strong></td>
<td align="center"><strong>Styling</strong></td>
<td align="center"><strong>Data & API</strong></td>
<td align="center"><strong>Tools</strong></td>
</tr>
<tr>
<td align="center">
• React 18<br>
• TypeScript<br>
• Vite
</td>
<td align="center">
• Tailwind CSS<br>
• Shadcn/UI<br>
• Recharts
</td>
<td align="center">
• Apollo Client<br>
• GraphQL<br>
• GitHub API
</td>
<td align="center">
• ESLint<br>
• PostCSS<br>
• Autoprefixer
</td>
</tr>
</table>

## 🚀 Quick Start

### Prerequisites

```bash
# Check if you have the required versions
node --version  # v18.0.0 or higher
npm --version   # v8.0.0 or higher
```

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/yourusername/search-github-users.git
cd search-github-users
```

**2. Install dependencies**

```bash
npm install
# or
yarn install
```

**3. Set up environment variables**

Create a `.env.local` file in the root directory:

```bash
# Copy the example file
cp .env.example .env.local

# Edit the file and add your GitHub token
echo 'VITE_GITHUB_TOKEN=your_github_personal_access_token_here' > .env.local
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open your browser**

Navigate to `http://localhost:5173`

## 🔑 Getting a GitHub Token

<details>
<summary><strong>Click to expand step-by-step guide</strong></summary>

1. Go to [GitHub Settings](https://github.com/settings/tokens) → Developer settings → Personal access tokens
2. Click **"Generate new token (classic)"**
3. Add a descriptive note: `GitHub User Search App`
4. Select the following scopes:
   - ✅ `public_repo` - Access public repositories
   - ✅ `read:user` - Read user profile data
5. Click **"Generate token"**
6. **Important**: Copy the token immediately (you won't see it again!)
7. Add it to your `.env.local` file

</details>

## 📱 Usage

<table>
<tr>
<td width="50%">

**🔍 Search Users**
- Enter any GitHub username
- Real-time search suggestions
- Instant profile loading

**📊 View Analytics**
- User statistics overview
- Repository insights
- Language distribution

</td>
<td width="50%">

**📈 Interactive Charts**
- Most starred repositories
- Most forked projects
- Programming languages used
- Responsive visualizations

**🎨 Modern Interface**
- Clean, intuitive design
- Mobile-friendly layout
- Smooth animations

</td>
</tr>
</table>

## 🏗️ Project Structure

```
search-github-users/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 charts/          # Data visualization components
│   │   │   ├── ForkedRepos.tsx
│   │   │   ├── PopularRepos.tsx
│   │   │   └── UsedLanguages.tsx
│   │   ├── 📁 form/            # Search form components
│   │   │   └── SearchForm.tsx
│   │   ├── 📁 ui/              # Shadcn/UI components
│   │   │   └── ...
│   │   └── 📁 user/            # User profile components
│   │       ├── Loading.tsx
│   │       ├── StatsCard.tsx
│   │       ├── StatsContainer.tsx
│   │       ├── UserCard.tsx
│   │       └── UserProfile.tsx
│   ├── 📄 apolloClient.ts      # GraphQL client configuration
│   ├── 📄 queries.ts           # GraphQL queries
│   ├── 📄 types.ts             # TypeScript type definitions
│   ├── 📄 utils.ts             # Helper functions
│   └── 📄 main.tsx             # Application entry point
├── 📄 package.json
├── 📄 tailwind.config.js
├── 📄 vite.config.ts
└── 📄 README.md
```

## 🧪 Available Scripts

<div align="center">

| Command | Description | Usage |
|---------|-------------|-------|
| **Development** | | |
| `npm run dev` | 🚀 Start development server | Hot reload, fast refresh |
| `npm run preview` | 👀 Preview production build | Test before deployment |
| **Build & Deploy** | | |
| `npm run build` | 🏗️ Build for production | Optimized bundle |
| `npm run lint` | 🔍 Run ESLint | Code quality check |
| **Utilities** | | |
| `npm run type-check` | 📝 Run TypeScript compiler | Type safety validation |
| `npm run clean` | 🧹 Clean build files | Remove dist folder |

</div>

## 🎨 Customization

<details>
<summary><strong>🎨 Styling & Themes</strong></summary>

**Tailwind Configuration**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      }
    }
  }
}
```

**CSS Variables**
```css
/* src/index.css */
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

</details>

<details>
<summary><strong>📊 Chart Customization</strong></summary>

**Adding New Charts**
1. Create component in `src/components/charts/`
2. Add data processing function in `src/utils.ts`
3. Import and use in `UserProfile.tsx`

**Modifying Colors**
```typescript
// In chart components
const chartConfig = {
  dataKey: {
    label: 'Your Label',
    color: '#your-color', // Change this
  },
}
```

</details>

## 🤝 Contributing

We welcome contributions! Here's how you can help:

<table>
<tr>
<td width="33%">

**🐛 Bug Reports**
- Check existing issues
- Use bug report template
- Provide reproduction steps

</td>
<td width="33%">

**✨ Feature Requests**
- Check planned features
- Use feature request template
- Explain use case clearly

</td>
<td width="33%">

**💻 Code Contributions**
- Fork the repository
- Create feature branch
- Follow coding standards

</td>
</tr>
</table>

### Development Workflow

```bash
# 1. Fork and clone
git clone https://github.com/yourusername/search-github-users.git

# 2. Create feature branch
git checkout -b feature/amazing-feature

# 3. Make changes and commit
git commit -m "✨ Add amazing feature"

# 4. Push and create PR
git push origin feature/amazing-feature
```

## 📄 License

```
MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🙏 Acknowledgments

- [**GitHub GraphQL API**](https://docs.github.com/en/graphql) - Comprehensive user data
- [**Shadcn/UI**](https://ui.shadcn.com/) - Beautiful, accessible components  
- [**Recharts**](https://recharts.org/) - Powerful data visualization
- [**Apollo Client**](https://www.apollographql.com/docs/react/) - Excellent GraphQL integration
- [**Tailwind CSS**](https://tailwindcss.com/) - Utility-first CSS framework

