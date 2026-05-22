# Next.js Authentication Architecture & Route Guards

A secure authentication system built with **Next.js App Router**, **Firebase Authentication**, and **Zustand** for global state management.

This project demonstrates user registration, login, protected routes, authentication persistence, and global user state synchronization.

---

## Features

### Phase 1: Base Routing & Form Scaffolding

- Next.js App Router implementation
- Login page (`/login`)
- Registration page (`/register`)
- Dashboard page (`/dashboard`)
- Functional form state management using React hooks
- Input validation and submission handling

### Phase 2: Firebase Authentication Integration

- Firebase Authentication setup
- User registration using Email/Password
- User login using Email/Password
- Authentication persistence across refreshes
- Firebase user session management

### Phase 3: Route Protection & Global State

- Protected dashboard route
- Automatic redirect of unauthenticated users
- Zustand global authentication store
- Global storage of:
  - User Name
  - User Email
  - User UID
- State hydration on page refresh
- Logout functionality

---

## Tech Stack

### Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS

### Authentication

- Firebase Authentication

### State Management

- Zustand

---

## Project Structure

```text
src
│
├── app
│   ├── login
│   │   └── page.tsx
│   │
│   ├── register
│   │   └── page.tsx
│   │
│   ├── dashboard
│   │   └── page.tsx
│   │
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   └── ProtectedRoute.tsx
│
├── context
│   └── AuthContext.tsx
│
├── firebase
│   └── config.ts
│
├── store
│   └── authStore.ts
│
└── middleware.ts (optional)
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd project-name
```

### Install Dependencies

```bash
npm install
```

Install Firebase:

```bash
npm install firebase
```

Install Zustand:

```bash
npm install zustand
```

---

## Firebase Setup

### 1. Create Firebase Project

1. Open Firebase Console
2. Create a new project
3. Disable Google Analytics (optional)

### 2. Enable Authentication

Navigate to:

```text
Authentication
→ Get Started
→ Sign-in Method
→ Email/Password
→ Enable
```

### 3. Register Web Application

Navigate to:

```text
Project Settings
→ Add App
→ Web App
```

Copy the Firebase configuration values.

---

## Environment Variables

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
```

---

## Running the Application

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Authentication Flow

### Registration

1. Navigate to:

```text
/register
```

2. Enter email and password
3. Firebase creates a new account
4. User data is stored in Firebase Authentication

### Login

1. Navigate to:

```text
/login
```

2. Enter registered credentials
3. Firebase validates credentials
4. User is redirected to dashboard

### Dashboard Access

Authenticated users can access:

```text
/dashboard
```

Unauthenticated users are automatically redirected to:

```text
/login
```

---

## Zustand Global Store

The application stores authenticated user information globally:

```ts
{
  uid: string;
  email: string;
  name: string;
}
```

Benefits:

- Accessible across all components
- No prop drilling
- State synchronization after login
- Automatic hydration on refresh

---

## Route Protection

Protected routes are implemented using:

### ProtectedRoute Component

Checks authentication status before rendering protected content.

If user is not authenticated:

```text
/dashboard
↓
Redirect
↓
/login
```

---

## Testing Checklist

### Registration

- [ ] User can create an account
- [ ] Firebase Authentication receives user

### Login

- [ ] User can log in successfully
- [ ] Redirect to dashboard works

### Protected Routes

- [ ] Unauthenticated access redirects to login
- [ ] Authenticated users can access dashboard

### State Management

- [ ] User Name stored in Zustand
- [ ] User Email stored in Zustand
- [ ] User UID stored in Zustand
- [ ] Data persists after refresh

### Logout

- [ ] User session ends successfully
- [ ] Redirect to login page
- [ ] Dashboard becomes inaccessible

---

## Future Improvements

- Google Authentication
- Password Reset
- Role-Based Access Control (RBAC)
- Middleware-based authentication guards
- React Hook Form integration
- Zod validation
- Toast notifications
- User profile management
- Firebase Firestore integration

---

## Learning Outcomes

This project demonstrates:

- Next.js App Router architecture
- Firebase Authentication integration
- Route guarding and access control
- Global state management using Zustand
- Authentication persistence
- React Context API usage
- Secure frontend authentication patterns

---
