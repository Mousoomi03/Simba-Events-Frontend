# SIMBA Events - Event Management Frontend

<div align="center">
  <img src="src/images/SimbaLogo.png" alt="SIMBA Events Logo" width="100"/>
  <h3>A modern, user-friendly event management platform frontend</h3>
</div>

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap)
![Axios](https://img.shields.io/badge/Axios-1.13.1-5A29E4)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features Breakdown](#key-features-breakdown)
- [API Integration](#api-integration)

---

## Overview

**SIMBA Events** is a comprehensive event management platform frontend built with React. It provides a seamless experience for users to discover, book, and manage events while offering organizers powerful tools to create and manage their events. The platform includes real-time notifications, booking management, feedback systems, and detailed analytics dashboards.

---

## Features

### 👥 User Features
- **Event Discovery** - Browse and search for trending events
- **Easy Booking** - Simple multi-step booking process with confirmation
- **Booking History** - Track all past and upcoming bookings
- **Real-time Notifications** - Get instant updates on booking status and events
- **Event Reviews** - Rate and review attended events
- **User Dashboard** - Personalized event recommendations and booking overview
- **Profile Management** - Update personal information and preferences

### 🎯 Organizer Features
- **Event Creation** - Create and manage events with detailed information
- **Event Management** - Update event details, availability, and pricing
- **Event Analytics** - View booking statistics and event performance
- **Feedback Dashboard** - Analyze user feedback and ratings
- **Category Management** - Organize events by categories
- **Event Deletion** - Remove events when needed

### 💬 General Features
- **Feedback System** - Submit and view event feedback
- **Role-based Access** - Different dashboards for users and organizers
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Real-time Updates** - Live notifications using SignalR
- **Dark/Light Theme** - Toggle between themes for comfortable viewing
- **Authentication** - Secure login and signup with JWT tokens
- **Confetti Effects** - Celebratory animations on successful bookings

---

## Tech Stack

### Frontend Framework
- **React** (19.2.0) - UI library
- **React Router** (7.9.5) - Client-side routing
- **React Bootstrap** (2.10.10) - UI component library

### State Management & Authentication
- **AuthContext** - Application-wide authentication state
- **JWT** - JSON Web Token for secure authentication
- **Firebase** (12.5.0) - Backend services

### API & Real-time Communication
- **Axios** (1.13.1) - HTTP client for API requests
- **SignalR** (9.0.6) - Real-time communication for notifications

### UI & Styling
- **Bootstrap** (5.3.8) - Responsive design framework
- **Tailwind** (4.0.0) - Utility-first CSS
- **React Icons** (5.5.0) - Icon library
- **Lucide React** (0.552.0) - Modern icon set
- **Animate.css** (4.1.1) - CSS animations

### Data Visualization & Utilities
- **Chart.js** (4.5.1) - Charts and graphs
- **React ChartJS 2** (5.3.1) - React wrapper for Chart.js
- **React Countup** (6.5.3) - Animated number counters
- **Canvas Confetti** (1.9.4) - Confetti animations
- **React Simple Star Rating** (5.1.7) - Star rating component
- **React Select** (5.10.2) - Advanced select component
- **React Toastify** (11.0.5) - Toast notifications

---

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Clone the Repository
```bash
git clone https://github.com/yourusername/event_management_frontend.git
cd event_management_frontend
```

### Install Dependencies
```bash
npm install
```

---

## Getting Started

### Start Development Server
```bash
npm start
```
The application will open at [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `build` folder.

### Run Tests
```bash
npm test
```
Launches the test runner in interactive watch mode.

---

## Project Structure

```
src/
├── App.js                          # Main application component
├── App.css                         # Global styles
├── AuthContext.js                  # Authentication context provider
├── index.js                        # React entry point
├── index.css                       # Global CSS
│
├── components/                     # Reusable components
│   ├── Header.js                   # Navigation header
│   ├── Footer.js                   # Footer component
│   ├── LandingPage.js              # Landing page
│   └── Booking/                    # Booking-related components
│       ├── BookTicketsPanel.js
│       ├── EventDetailsCard.js
│       ├── ImageCarousel.js
│       └── ...
│
├── Booking/                        # Booking feature modules
│   ├── BookingService.js           # Booking API service
│   ├── EventDetailsPage.js         # Event details display
│   ├── ReviewBookingPage.js        # Booking review
│   ├── BookingConfirmationPage.js  # Confirmation page
│   ├── TopEvents.js                # Trending events
│   └── ...
│
├── BookingHistory/                 # Booking history & notifications
│   ├── BookingHistory.jsx          # User's booking history
│   ├── NotificationTab.js          # Real-time notifications
│   ├── NotificationContext.js      # Notification state management
│   ├── SignalService.js            # SignalR integration
│   └── api.js                      # API calls
│
├── Dashboard/                      # User dashboard
│   ├── UserDashboard.js            # Main dashboard
│   ├── EventCard.js                # Event card component
│   └── CategoryList.js             # Category filters
│
├── Feedback/                       # Feedback system
│   ├── SubmitFeedback.js           # Submit feedback form
│   ├── FeedbackAdmin.js            # Feedback dashboard
│   ├── BarChart.js                 # Analytics charts
│   └── ...
│
├── OrganiserDashboard/             # Organizer-specific features
│   ├── Dashboard.jsx               # Organizer dashboard
│   ├── CreateEventForm.jsx         # Event creation
│   ├── UpdateEventPage.jsx         # Event editing
│   ├── EventTable.jsx              # Events list table
│   └── ...
│
├── Login/                          # Authentication pages
│   ├── Login.js                    # Login form
│   ├── Signup.js                   # Registration form
│   ├── ProfilePage.js              # User profile
│   ├── ProtectedRoute.js           # Route protection
│   └── Api.js                      # Auth API calls
│
└── images/                         # Static images and assets
```

---

## Key Features Breakdown

### 🔐 Authentication System
- JWT-based authentication with token storage
- Protected routes using `ProtectedRoute` component
- Role-based access control (User/Organizer)
- Secure logout functionality

### 📅 Event Booking
- Multi-step booking process with validation
- Real-time availability checking
- Booking confirmation with confetti animation
- Review and cancel bookings

### 🔔 Real-time Notifications
- SignalR integration for live updates
- Notification context for global state management
- Toast notifications for user feedback
- Booking status updates

### 📊 Analytics & Feedback
- Bar charts for feedback visualization
- Star rating system for reviews
- Feedback filtering and sorting
- Admin feedback dashboard for organizers

### 📱 Responsive Design
- Mobile-first approach with Bootstrap
- Tailwind CSS for utility styling
- CSS modules for component-scoped styles
- Optimized for all screen sizes

---

## API Integration

The frontend communicates with the backend API through:

### API Services
- **BookingService.js** - Event and booking operations
- **Login/Api.js** - Authentication endpoints
- **BookingHistory/api.js** - Booking history and notifications
- **Axios instances** - Global HTTP client configuration

### Main Endpoints
- `/api/events` - Event operations
- `/api/bookings` - Booking management
- `/api/users` - User information
- `/api/feedback` - Feedback submission and retrieval
- `SignalR Hub` - Real-time notifications

---

## Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- UI Components from [React Bootstrap](https://react-bootstrap.github.io/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/) and [Lucide React](https://lucide.dev/)
- Real-time features powered by [SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr)

---

<div align="center">
  <p><strong>Made with ❤️ by the SIMBA Events Team</strong></p>
</div>

