# Contributing to Ahmed Sneed Portfolio

Thank you for your interest in contributing to my portfolio website! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Bugs
- Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md)
- Provide detailed steps to reproduce the issue
- Include screenshots if applicable
- Specify your environment (OS, browser, etc.)

### Suggesting Features
- Use the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md)
- Describe the problem you're trying to solve
- Explain how the feature would benefit users
- Consider alternative solutions

### Code Contributions
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests if applicable
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Local Development
1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your configuration
4. Start development server: `npm start`
5. Make your changes
6. Run tests: `npm test`
7. Build for production: `npm run build`

## 📝 Code Style

### JavaScript/React
- Use functional components with hooks
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages
- Add JSDoc comments for complex functions

### CSS/Styling
- Use Tailwind CSS utility classes
- Follow the existing design system
- Ensure responsive design
- Maintain accessibility standards

### File Structure
- Keep components small and focused
- Use descriptive file names
- Organize imports logically
- Follow the existing folder structure

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- --testPathPattern=ComponentName
```

### Writing Tests
- Test component rendering
- Test user interactions
- Test error states
- Maintain good test coverage

## 📋 Pull Request Guidelines

### Before Submitting
- [ ] Code follows the style guidelines
- [ ] Tests pass locally
- [ ] No console errors or warnings
- [ ] Responsive design works on all devices
- [ ] Accessibility standards are met
- [ ] Performance is not degraded

### PR Description
- Describe the changes made
- Link to related issues
- Include screenshots for UI changes
- Mention any breaking changes

## 🎨 Design Guidelines

### Visual Design
- Follow the existing design system
- Use consistent spacing and typography
- Maintain color scheme consistency
- Ensure good contrast ratios

### User Experience
- Keep interactions intuitive
- Provide loading states
- Handle error states gracefully
- Ensure keyboard navigation works

## 🔒 Security

### Code Security
- Don't commit sensitive data
- Use environment variables for secrets
- Validate user inputs
- Follow security best practices

### Data Privacy
- Respect user privacy
- Don't collect unnecessary data
- Follow GDPR guidelines
- Secure data transmission

## 📚 Documentation

### Code Documentation
- Add JSDoc comments for functions
- Document complex logic
- Keep README updated
- Update API documentation

### User Documentation
- Update user guides if needed
- Document new features
- Provide usage examples
- Keep deployment guides current

## 🚀 Deployment

### Testing Deployment
- Test changes in development
- Verify build process works
- Check for production issues
- Test on different browsers

### Environment Variables
- Don't commit `.env` files
- Document required variables
- Use `.env.example` for reference
- Update deployment guides

## 🤝 Community Guidelines

### Communication
- Be respectful and inclusive
- Use clear and constructive language
- Provide helpful feedback
- Welcome new contributors

### Code Review
- Review code thoroughly
- Provide constructive feedback
- Suggest improvements
- Approve when satisfied

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

## 📞 Support

If you need help:
- Check existing issues and PRs
- Read the documentation
- Ask questions in issues
- Contact the maintainer

---

**Thank you for contributing! 🎉** 