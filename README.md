# RuleCMS Widget Integration - React Demo

A comprehensive demonstration showing how to integrate **RuleCMS widgets** into any React application. This project serves as both a working example and a tutorial for developers who want to add RuleCMS widgets to their own React applications.

## What is RuleCMS?

**RuleCMS** is a powerful visual content management system that lets you:

- 🎨 **Build widgets visually** using a drag-and-drop composer interface
- 📱 **Create responsive content** that works across all devices
- 🚀 **Publish instantly** and get a unique published key for each widget
- 🔗 **Integrate anywhere** with just a few lines of code

Think of it as a visual page builder that generates widgets you can embed in any React application.

## How RuleCMS Widget Integration Works

### The Complete Workflow

1. **Design Phase** 🎨
   - Log into your RuleCMS account at [rulecms.com](https://rulecms.com)
   - Use the visual composer to create your widget
   - Add text, images, buttons, forms, and interactive elements
   - Preview your widget and make adjustments

2. **Publish Phase** 📤
   - Click "Publish" when your widget is ready
   - RuleCMS generates a unique **Published Key** for your widget
   - Copy this key - you'll need it for integration

3. **Integration Phase** ⚡
   - Install the `@rulecms/widget-react` package in your React app
   - Use the `RuleCMSWidget` component with your published key
   - Your widget appears in your React app with all functionality intact

4. **Authentication** 🔐
   - Generate an **App Token** from your RuleCMS project settings
   - This token authorizes your React app to fetch your published widgets

## Adding RuleCMS Widgets to Your Own React App

Follow these steps to integrate RuleCMS widgets into any React application:

### Step 1: Install the Package

Add the RuleCMS widget package to your React project:

```bash
npm install @rulecms/widget-react
```

**Note**: If you encounter peer dependency warnings with newer React versions, use:
```bash
npm install @rulecms/widget-react --legacy-peer-deps
```

### Step 2: Set Up Environment Variables

Create a `.env.local` file (or `.env` for non-Create React App projects):

```env
# Your RuleCMS App Token (required)
REACT_APP_RULECMS_TOKEN=your_app_token_here

# RuleCMS API Endpoint (optional - defaults to https://rulecms.com)
REACT_APP_RULECMS_ENDPOINT=https://rulecms.com
```

### Step 3: Implement the Integration

```jsx
import React from 'react';
import { RuleCMSWidgetProvider, RuleCMSWidget } from '@rulecms/widget-react';

function App() {
  const appToken = process.env.REACT_APP_RULECMS_TOKEN;
  const endpoint = process.env.REACT_APP_RULECMS_ENDPOINT || "https://rulecms.com";

  return (
    <RuleCMSWidgetProvider token={appToken} endpoint={endpoint}>
      <div className="App">
        <h1>My App</h1>

        {/* Replace with your actual published key */}
        <RuleCMSWidget publishedKey="your-widget-published-key" />

        <p>More content...</p>
      </div>
    </RuleCMSWidgetProvider>
  );
}

export default App;
```

### Step 4: Get Your Credentials

#### Get Your App Token:
1. Visit [rulecms.com](https://rulecms.com) and log into your account
2. Navigate to your project settings
3. Find "API Tokens" or "App Tokens" section
4. Generate a new token with widget access permissions
5. Copy the token and add it to your environment variables

#### Get Your Published Key:
1. In RuleCMS, create or edit a widget using the visual composer
2. Design your widget with text, images, buttons, forms, etc.
3. Click "Publish" when ready
4. Copy the generated published key
5. Use this key in your `RuleCMSWidget` component

### Step 5: Test Your Integration

Start your React development server:
```bash
npm start
```

Your RuleCMS widget should now appear in your React application with all its interactive features working!

## Running This Demo Project

To run this specific demo project:

### Prerequisites

- Node.js 16+
- npm or yarn
- A RuleCMS account (optional - demo works with placeholder values)

### Installation

```bash
# Clone this repository
git clone <repository-url>
cd use_rulecms_create_react_app

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Edit .env.local with your actual tokens (optional for demo)
# Start the development server
npm start
```

The demo will open at `http://localhost:3000`

## Understanding the Integration Components

### Required Components

The `@rulecms/widget-react` package provides two essential components:

#### 1. `RuleCMSWidgetProvider`

This is a context provider that must wrap your entire app (or the section where you use RuleCMS widgets):

```jsx
<RuleCMSWidgetProvider token={appToken} endpoint={endpoint}>
  {/* Your app content */}
</RuleCMSWidgetProvider>
```

**Props:**
- `token` (required): Your app token from RuleCMS project settings
- `endpoint` (optional): API endpoint URL (defaults to https://rulecms.com)

#### 2. `RuleCMSWidget`

This component renders your actual widget:

```jsx
<RuleCMSWidget publishedKey="your-widget-published-key" />
```

**Props:**
- `publishedKey` (required): The unique key generated when you publish a widget

### Multiple Widgets

You can render multiple widgets in the same app:

```jsx
<RuleCMSWidgetProvider token={appToken}>
  <div className="App">
    <header>
      <RuleCMSWidget publishedKey="header-widget-key" />
    </header>

    <main>
      <RuleCMSWidget publishedKey="main-content-widget-key" />
    </main>

    <footer>
      <RuleCMSWidget publishedKey="footer-widget-key" />
    </footer>
  </div>
</RuleCMSWidgetProvider>
```

## Environment Variables Reference

For this demo project, create a `.env.local` file:

```env
# Your RuleCMS App Token (required)
REACT_APP_RULECMS_TOKEN=your_app_token_here

# RuleCMS API Endpoint (optional)
# Defaults to https://rulecms.com if not provided
REACT_APP_RULECMS_ENDPOINT=https://rulecms.com
```

**Security Note**: Never commit actual app tokens to version control. Always use environment variables.

## What You Can Build with RuleCMS Widgets

RuleCMS widgets can contain any combination of:

- 📝 **Rich Text Content** - Formatted text, headings, paragraphs
- 🖼️ **Images & Media** - Photos, videos, galleries
- 🔘 **Interactive Elements** - Buttons, forms, links
- 📋 **Data Collections** - Lists, tables, cards
- 🎨 **Custom Styling** - Colors, fonts, layouts
- 📱 **Responsive Design** - Automatic mobile optimization
- ⚡ **Dynamic Content** - Real-time updates and interactions

## Features This Demo Shows

- ✅ **Easy Package Installation** - Simple npm install process
- ✅ **Environment Configuration** - Secure token management
- ✅ **Provider Setup** - Proper context configuration
- ✅ **Widget Rendering** - Display published widgets
- ✅ **Error Handling** - Graceful handling of missing credentials
- ✅ **Responsive Design** - Works on all device sizes
- ✅ **Professional UI** - Clean, modern interface

## Framework Compatibility

This integration method works with all popular React frameworks:

| Framework | Package Version | Environment Variable Prefix |
|-----------|----------------|------------------------------|
| **Create React App** | `@rulecms/widget-react@1.0.6` | `REACT_APP_` |
| **Next.js** | `@rulecms/widget-react@1.0.6` | `NEXT_PUBLIC_` |
| **Vite** | `@rulecms/widget-react@1.0.6` | `VITE_` |
| **Remix** | `@rulecms/widget-react@1.0.6` | No prefix needed |

## Troubleshooting

### Common Issues

**1. "Module not found" errors**
```bash
# Try installing with legacy peer deps
npm install @rulecms/widget-react --legacy-peer-deps
```

**2. Widget not displaying**
- Verify your published key is correct
- Check that your app token has proper permissions
- Ensure the RuleCMSWidgetProvider wraps your widget components

**3. Environment variables not loading**
- Ensure proper prefix for your framework (REACT_APP_, NEXT_PUBLIC_, etc.)
- Restart your development server after adding environment variables
- Check that .env file is in the correct location

## Available Scripts

In this demo project directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

## Demo Project Structure

```
use_rulecms_create_react_app/
├── public/
│   ├── index.html          # SEO-optimized with RuleCMS meta tags
│   └── favicon.ico         # RuleCMS favicon
├── src/
│   ├── App.tsx             # Main component showing RuleCMS integration
│   ├── App.css             # Professional styling
│   └── index.tsx           # App entry point
├── .env.example            # Environment variables template
├── .env                    # Local environment (not committed)
├── LICENSE                 # MIT License
├── package.json            # Dependencies including @rulecms/widget-react
└── README.md               # This comprehensive guide
```

## Learn More

- 🌐 **RuleCMS Platform**: [rulecms.com](https://rulecms.com)
- 📦 **NPM Package**: [@rulecms/widget-react](https://www.npmjs.com/package/@rulecms/widget-react)
- 📚 **Documentation**: [Coming Soon]
- 💬 **Community Support**: [Coming Soon]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Get Started Today

1. **Sign up** at [rulecms.com](https://rulecms.com)
2. **Create your first widget** using the visual composer
3. **Publish** and get your keys
4. **Follow this guide** to integrate into your React app

**Built with ❤️ by the RuleCMS team**

*Transform your React applications with powerful, visual content management. No backend required!*
