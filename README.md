# Multi-Step Form

A responsive multi-step form built with React, TypeScript, and Next.js that guides users through multiple steps to gather account information. This form includes step-based navigation, progress tracking, and form validation using Zod.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Multi-step form navigation:** Users can move between steps, with data preserved between steps.
- **Progress bar:** Displays form progress as a percentage.
- **Form validation:** Uses Zod schema for form data validation at submission.
- **Toast notifications:** User-friendly notifications for success and error messages.
- **Responsive design:** Mobile-friendly layout using Tailwind CSS.
- **Next.js:** Server-side rendering and routing support for smooth navigation.

## Technologies

- **React** - Frontend framework
- **Next.js** - Full-stack framework for server-side rendering and routing
- **TypeScript** - Strongly typed JavaScript
- **Tailwind CSS** - Utility-first CSS framework for fast UI styling
- **Zod** - Schema-based validation for forms
- **react-hot-toast** - Toast notification library
- **Next Safe Action** - API for secure server-side actions

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/viral-siddhapura/multi-stepper-form.git

2. Navigate to the project directory:

   ```bash
   cd multi-stepper-form

3. Install the dependencies:

   ```bash
   npm install

4. Start the development server:

   ```bash
   npm run dev
   
5. Open [http://localhost:3000](url) in your browser to view the form.

## Usage

The multi-step form helps users through a three-step process:

### Step 1: Create an account  
The user provides basic details like email, first name, and last name.

### Step 2: Provide skill level  
The user specifies their skill level or expertise (for example, beginner, intermediate, or expert).

### Step 3: Set a password  
The user creates and confirms a password for their account.

Upon form submission, the data is validated and processed, followed by a redirect to the login page. If any validation fails, appropriate error messages are shown using toast notifications.

## Folder Structure

```bash
├── components/
│   ├── ui/
│   │   └── progress.tsx
│   └── auth/
│       ├── step-one.tsx
│       ├── step-two.tsx
│       ├── step-three.tsx
│       └── multi-step-form.tsx
├── server/
│   └── actions/
│       └── register.ts
├── types/
│   └── register-schema.ts
├── pages/
│   └── api/
│       └── index.tsx
├── public/
├── styles/
├── package.json
└── README.md

```

## Key Files

- `multi-step-form.tsx`: Manages the form steps and their transitions.
- `step-one.tsx`, `step-two.tsx`, `step-three.tsx`: Individual step components.
- `register.ts`: Handles the form submission and backend logic.
- `register-schema.ts`: Defines the validation schema using Zod.


## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a pull request.
