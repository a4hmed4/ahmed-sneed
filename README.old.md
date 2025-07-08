# Ahmed El-Sayed Portfolio

A clean, modern, and professional portfolio website built with React, Tailwind CSS, and Framer Motion. Inspired by minimalist design principles and modern web standards.

## ✨ Features

- **Clean & Minimal Design** - Inspired by modern portfolio websites like Mitchell Sparrow and Code Wonders
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Responsive Layout** - Optimized for all devices and screen sizes
- **Smooth Animations** - Subtle Framer Motion animations for enhanced UX
- **Professional Sections** - Hero, About, Experience, Skills, Projects, and Contact
- **Admin Panel** - Secure content management system (hidden from public view)
- **Contact Form** - EmailJS integration for seamless communication
- **SEO Optimized** - Meta tags, structured data, and performance optimized

## 🛠️ Tech Stack

- **Frontend**: React 18, Tailwind CSS 3.3, Framer Motion
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Backend**: Firebase (Firestore, Auth, Storage)
- **Email**: EmailJS for contact form
- **Deployment**: Firebase Hosting / Vercel / Netlify

## 🎨 Design Philosophy

This portfolio follows minimalist design principles:

- **Typography**: Clean Inter font with proper hierarchy
- **Colors**: Monochromatic palette with subtle accents
- **Spacing**: Generous whitespace for better readability
- **Animations**: Subtle and purposeful, not distracting
- **Layout**: Grid-based with consistent spacing
- **Accessibility**: WCAG compliant with proper contrast ratios

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AdminPanel.js    # Secure admin interface
│   ├── AnimatedSection.js # Animation wrapper
│   ├── ContactForm.js   # Contact form component
│   ├── DarkModeToggle.js # Theme switcher
│   ├── Navbar.js        # Navigation component
│   └── ProjectCard.js   # Project display card
├── data/
│   └── portfolioData.js # Static content data
├── utils/
│   ├── emailService.js  # Email functionality
│   └── theme.js         # Theme utilities
├── assets/              # Images and static files
├── App.js              # Main application component
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahmadseneed/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Start development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Customization

### Content Updates

1. **Personal Information**: Update `src/data/portfolioData.js`
2. **Styling**: Modify `src/index.css` and `tailwind.config.js`
3. **Images**: Replace files in `src/assets/`
4. **Colors**: Update color scheme in Tailwind config

### Adding New Sections

1. Create new component in `src/components/`
2. Add route in `src/App.js`
3. Update navigation in Navbar component
4. Add content to portfolio data

### Styling Changes

The design system uses:
- **Primary Colors**: Black/White with gray accents
- **Typography**: Inter font family
- **Spacing**: Consistent 4px grid system
- **Animations**: Subtle Framer Motion transitions

## 🔧 Configuration

### Tailwind CSS

Custom configuration in `tailwind.config.js`:
- Custom color palette
- Typography plugin
- Forms plugin
- Custom animations
- Responsive breakpoints

### Firebase Setup

1. Create Firebase project
2. Enable Firestore, Auth, and Storage
3. Update configuration in `src/firebase.js`
4. Set up security rules

### EmailJS Setup

1. Create EmailJS account
2. Set up email service
3. Create email template
4. Update configuration in `src/utils/emailService.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

- Automatic system preference detection
- Manual toggle in navigation
- Persistent theme storage
- Smooth transitions between themes

## ⚡ Performance

- Lazy loading for images
- Code splitting with React Router
- Optimized bundle size
- Lighthouse score: 95+

## 🔒 Security

- Firebase security rules
- Input validation
- XSS protection
- Secure admin panel access

## 📊 SEO

- Meta tags optimization
- Structured data markup
- Sitemap generation
- Performance optimization

## 🚀 Deployment

### Firebase Hosting

```bash
npm run build
firebase deploy
```

### Vercel

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=build
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## 📈 Analytics

- Google Analytics integration
- Performance monitoring
- User behavior tracking
- Conversion optimization

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Add tests
5. Submit pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Ahmed El-Sayed**
- Email: ahmadseneed@gmail.com
- LinkedIn: [Ahmed El-Sayed](https://www.linkedin.com/in/ahmed-elsayed-sneed)
- GitHub: [@ahmadseneed](https://github.com/ahmadseneed)

## 🙏 Acknowledgments

- Design inspiration from [Mitchell Sparrow](https://www.mitchellsparrow.com/) and [Code Wonders](https://www.codewonders.dev/)
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Firebase for backend services

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
