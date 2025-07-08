# Ahmed Elsayed Sneed - Portfolio Website

A modern, dynamic portfolio website showcasing my work in AI/ML, Full Stack Development, and Business Intelligence.

## 🌟 Features

### Frontend
- **Enhanced Modern Design**: Professional interface with improved typography and spacing
- **Advanced Responsive Layout**: Optimized for all devices with enhanced mobile experience
- **Smooth Animations**: Framer Motion animations with custom easing and micro-interactions
- **Dynamic Content**: Three rotating sections (AI/ML, Full Stack, BI) with enhanced visuals
- **Enhanced Loading Screen**: Interactive robot animation with progress tracking and status indicators
- **Glass Morphism**: Modern UI effects with backdrop blur and enhanced shadows
- **Improved Accessibility**: Better focus states, reduced motion support, and high contrast mode
- **Custom Scrollbar**: Styled scrollbar with smooth scrolling and theme-aware colors

### Sections
- **Hero**: Dynamic rotating sections with profile and CTA buttons
- **About**: Personal story and background information
- **Projects**: Showcase of key projects (Medicare, Car Plates Recognition, VGA)
- **Experience**: Professional experience timeline
- **Activities**: University activities and leadership roles
- **Technical Skills**: Categorized skills with proficiency bars
- **Contact**: Contact information and social links

### Backend (Firebase)
- **Authentication**: Secure admin panel access
- **Firestore**: Database for dynamic content management
- **Storage**: File uploads for projects and CV
- **Real-time Updates**: Live content updates

## 🎨 Design Enhancements

### Visual Improvements
- **Enhanced Typography**: Improved font hierarchy with Inter font family
- **Better Color Scheme**: Refined color palette with better contrast ratios
- **Advanced Animations**: Smooth transitions with custom cubic-bezier easing
- **Enhanced Cards**: Improved hover effects with subtle shadows and transforms
- **Professional Layout**: Better spacing and visual hierarchy

### User Experience
- **Improved Loading Screen**: Interactive robot with progress tracking and status indicators
- **Enhanced Navigation**: Better focus states and hover effects
- **Accessibility Features**: High contrast mode, reduced motion support, and better keyboard navigation
- **Custom Scrollbar**: Theme-aware scrollbar with smooth scrolling
- **Print Styles**: Optimized layout for printing

### Performance Optimizations
- **Optimized Animations**: Reduced motion for users with accessibility preferences
- **Better Responsive Design**: Enhanced mobile experience with improved touch targets
- **Efficient CSS**: Optimized styles with better organization and reusability

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions
- **React Router**: Client-side routing

### Backend
- **Firebase**: Backend-as-a-Service
  - Authentication
  - Firestore Database
  - Storage
  - Hosting

### Development Tools
- **Create React App**: Development environment
- **ESLint**: Code linting
- **Prettier**: Code formatting

## 📁 Project Structure

```
ahmed-sneed/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
├── src/
│   ├── components/
│   │   ├── LoadingScreen.js
│   │   ├── Navbar.js
│   │   ├── AdminPanel.js
│   │   ├── AnimatedSection.js
│   │   ├── ProjectCard.js
│   │   ├── ContactForm.js
│   │   └── DarkModeToggle.js
│   ├── data/
│   │   └── portfolioData.js
│   ├── utils/
│   │   ├── emailService.js
│   │   └── theme.js
│   ├── firebase.js
│   ├── App.js
│   └── index.js
├── firebase.json
├── firestore.rules
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahmadseneed/portfolio.git
   cd ahmed-sneed
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project
   - Enable Authentication, Firestore, and Storage
   - Copy your Firebase config to `src/firebase.js`

4. **Start development server**
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication, Firestore Database, and Storage
3. Update `src/firebase.js` with your config:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### Environment Variables
Create a `.env` file in the root directory:
```
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

## 📊 Content Management

### Admin Panel
Access the admin panel at `/admin` to manage:
- Projects (add, edit, delete)
- About content
- Skills and proficiency levels
- Section visibility
- Contact information

### Data Structure
The portfolio data is stored in `src/data/portfolioData.js` and includes:
- Personal information
- Projects with descriptions and technologies
- Work experience timeline
- Skills categorized by domain
- Contact information
- Awards and achievements

## 🎨 Customization

### Colors and Themes
- Update color schemes in `tailwind.config.js`
- Modify gradient colors in component files
- Customize dark mode colors

### Animations
- Adjust animation timing in Framer Motion components
- Modify loading screen animation
- Customize page transitions

### Content
- Update personal information in `portfolioData.js`
- Add new projects and experiences
- Modify skills and proficiency levels

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Firebase Hosting
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init hosting
   ```

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on push
3. Configure environment variables in Vercel dashboard

### Netlify Deployment
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Configure environment variables

## 🔒 Security

### Firebase Security Rules
- Firestore rules in `firestore.rules`
- Storage rules in `storage.rules`
- Authentication required for admin access

### Environment Variables
- Never commit API keys to version control
- Use environment variables for sensitive data
- Configure proper CORS settings

## 📈 Performance

### Optimization
- Lazy loading for images
- Code splitting with React Router
- Optimized bundle size
- CDN for static assets

### Monitoring
- Firebase Analytics integration
- Performance monitoring
- Error tracking

## 🔍 SEO

### Meta Tags
- Dynamic meta tags for each page
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup

### Performance
- Fast loading times
- Mobile-friendly design
- Accessible navigation
- Semantic HTML structure

## 🐛 Troubleshooting

### Common Issues

1. **Firebase Connection Error**
   - Check Firebase config in `src/firebase.js`
   - Verify API keys and project settings
   - Ensure proper authentication setup

2. **Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for missing dependencies
   - Verify environment variables

3. **Styling Issues**
   - Clear browser cache
   - Check Tailwind CSS configuration
   - Verify CSS imports

4. **Animation Problems**
   - Check Framer Motion version compatibility
   - Verify animation props
   - Test on different browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: ahmadseneed@gmail.com
- **Phone**: +20 122 481 0784 | +20 101 396 9029
- **Location**: Tanta, Egypt
- **Website**: https://ahmed-sneed.vercel.app
- **GitHub**: https://github.com/ahmadseneed

## 🙏 Acknowledgments

- Framer Motion for animations
- Tailwind CSS for styling
- Firebase for backend services
- React community for inspiration

---

**Built with ❤️ by Ahmed Elsayed Sneed**
