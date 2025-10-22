# Nethmee Mudannayake - Portfolio Website

A beautiful and professional portfolio website built with React, showcasing my skills, experience, and projects as a Computer Science undergraduate.

## Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Professional Sections**:
  - Hero section with introduction and social links
  - About section with skills and personal statement
  - Experience timeline
  - Education details
  - Projects showcase with technology tags
  - Certifications grid
  - Contact information

## Technologies Used

- **React 18** - Frontend framework
- **CSS3** - Styling with modern features like gradients, flexbox, and grid
- **Font Awesome** - Icons for social media and certifications
- **Google Fonts** - Inter font family for typography

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Updating Personal Information

1. **Photo**: Replace the image URL in `src/components/Hero.js` with your own photo
2. **Social Links**: Update the social media URLs in `src/components/Hero.js` and `src/components/Contact.js`
3. **Content**: Modify the content in each component file to reflect your information
4. **Colors**: Update the gradient colors in `src/App.css` and `src/index.css`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.js`
3. Add navigation link in `src/components/Header.js`
4. Style the component in `src/App.css`

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation bar
│   ├── Hero.js            # Landing section with photo and intro
│   ├── About.js           # About me and skills
│   ├── Experience.js      # Work experience timeline
│   ├── Education.js       # Educational background
│   ├── Projects.js        # Projects showcase
│   ├── Certifications.js  # Certifications grid
│   └── Contact.js         # Contact information
├── App.js                 # Main app component
├── App.css                # Main styles
├── index.js               # App entry point
└── index.css              # Global styles
```

## Features in Detail

### Design Elements
- Gradient backgrounds and modern color scheme
- Smooth animations and transitions
- Card-based layouts with hover effects
- Timeline design for experience and education
- Responsive grid layouts

### Interactive Elements
- Smooth scrolling navigation
- Hover effects on cards and buttons
- Social media integration
- Mobile-responsive navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

- **Name**: Nethmee Mudannayake
- **Email**: nethmeemudannayake@gmail.com
- **LinkedIn**: [linkedin.com/in/nethmee-mudannayake](https://linkedin.com/in/nethmee-mudannayake)
- **GitHub**: [github.com/nethmee03](https://github.com/nethmee03)
My personal portfolio website built with React
