# React Redux Counter App

A professional counter application demonstrating modern state management with **React 18**, **Redux Toolkit**, and **Bootstrap 5**. Features a fully responsive UI with smooth animations and clean code architecture.

## 🎯 Key Highlights

- **State Management**: Redux Toolkit with clean slice-based architecture
- **Counter Operations**: Increment, decrement, add, subtract with validation (prevents negative values)
- **Privacy Mode**: Toggle to hide/show counter value
- **Responsive Design**: Mobile-first approach - optimized for smartphone, tablet, and desktop
- **Professional UI**: Modern gradient design with hover effects and visual feedback

## 🛠️ Tech Stack

`React 18` • `Redux Toolkit` • `Bootstrap 5` • `Vite` • `CSS3`

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Container.jsx         # Reusable card wrapper
│   ├── Controls.jsx          # Action buttons & input
│   ├── DisplayCounter.jsx    # Counter display
│   ├── Header.jsx            # App title
│   └── PrivacyMessage.jsx    # Privacy toggle
├── store/
│   ├── Counter.js            # Counter reducer with validation
│   ├── Privacy.js            # Privacy mode toggle
│   └── index.js              # Store configuration
├── App.jsx                   # Main component
└── App.css                   # Responsive styling
```

## 💡 Features

**Counter Operations**

- ✅ Increment/Decrement with zero floor limit
- ✅ Add/Subtract custom amounts
- ✅ Reset functionality

**UI/UX**

- ✅ Fully responsive grid layout
- ✅ Color-coded buttons for UX clarity
- ✅ Smooth transitions and hover effects
- ✅ Privacy mode with visual indicators

**Code Quality**

- ✅ Redux slice pattern for scalability
- ✅ Component-based architecture
- ✅ Responsive CSS with media queries
- ✅ Clean, maintainable codebase

## 📱 Responsive Breakpoints

| Device  | Width         | Layout                         |
| ------- | ------------- | ------------------------------ |
| Mobile  | < 576px       | Stack layout, compact buttons  |
| Tablet  | 576px - 768px | Medium spacing                 |
| Desktop | 1024px+       | Full-size with maximum spacing |

## 🎨 Design Features

- **Color Scheme**: Purple gradient (#667eea to #764ba2)
- **Interactions**: Smooth animations, shadow effects, hover states
- **Typography**: Clean, modern font hierarchy

## 📊 Redux State

```javascript
{
  counter: { counterVal: 0 },
  privacy: false
}
```

## 🔑 Learning Outcomes

This project demonstrates:

- Redux Toolkit best practices (slice pattern)
- React hooks (useState, useSelector, useDispatch, useRef)
- Bootstrap responsive grid system
- CSS media queries & responsive design
- Component composition & reusability
- State validation & error prevention

## 📝 Available Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview build
npm run lint     # Run ESLint
```

---

**Designed for learning state management while building production-ready UI.** 🚀

---

**Happy Counting!** 🎉
