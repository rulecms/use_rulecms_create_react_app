# RuleCMS Widget Demo - Create React App

A demonstration React application showcasing how to integrate **RuleCMS widgets** into any React application using the `@rulecms/widget-react` package.

## What is RuleCMS?

**RuleCMS** is a powerful content management system that allows you to create dynamic, customizable widgets through a visual composer interface. These widgets can then be published and integrated into any React application with minimal code.

## What this demo shows

This Create React App demonstrates:

- ✅ **Easy Integration**: How to add RuleCMS widgets to any React app with just a few lines of code
- ✅ **Published Widget Rendering**: Display widgets created in the RuleCMS composer using their published keys
- ✅ **App Token Authentication**: Secure access to published widgets using app tokens
- ✅ **Zero Configuration**: Works out of the box with standard React applications

## How it works

1. **Create widgets** in the RuleCMS composer interface
2. **Publish widgets** to get a unique published key
3. **Generate app tokens** for secure access
4. **Integrate widgets** into your React app using the `RuleCMSWidget` component

## Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn
- A RuleCMS account with published widgets and app tokens

### Installation

```bash
# Clone this repository
git clone <repository-url>
cd use_rulecms_create_react_app

# Install dependencies
npm install

# Set your app token (see Environment Variables section)
cp .env.example .env.local
# Edit .env.local with your actual app token

# Start the development server
npm start
```

The app will open at `http://localhost:3000`

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Your RuleCMS App Token
REACT_APP_RULECMS_TOKEN=your_app_token_here

# RuleCMS API Endpoint (Optional)
# You typically do not have to set it, as the `@rulecms/widget-react` package defaults to https://rulecms.com if no value is provided
# For production, use https://rulecms.com
REACT_APP_RULECMS_ENDPOINT=https://rulecms.com
```

**Important**: Never commit your actual app tokens to version control. Use environment variables and keep them secure.

## Code Example

Here's how simple it is to add a RuleCMS widget to your React app:

```jsx
import React from 'react';
import { RuleCMSWidgetProvider, RuleCMSWidget } from '@rulecms/widget-react';

function App() {
  const appToken = process.env.REACT_APP_RULECMS_TOKEN;
  const endpoint = process.env.REACT_APP_RULECMS_ENDPOINT || "https://rulecms.com";

  return (
    <RuleCMSWidgetProvider token={appToken} endpoint={endpoint}>
      <div className="App">
        <h1>My React App with RuleCMS Widget</h1>

        <RuleCMSWidget
          publishedKey="your-published-widget-key"
        />
      </div>
    </RuleCMSWidgetProvider>
  );
}

export default App;
```

## Getting Your Published Key and App Token

### Published Key
1. Create a widget in the RuleCMS composer
2. Click "Publish" to publish your widget
3. Copy the generated published key

### App Token
1. Go to your RuleCMS project settings
2. Navigate to "API Tokens" or "App Tokens"
3. Generate a new app token with appropriate permissions
4. Copy the token and add it to your environment variables

## Features Demonstrated

- **Widget Rendering**: Display complex, interactive widgets created in RuleCMS
- **Responsive Design**: Widgets automatically adapt to different screen sizes
- **Dynamic Content**: Widgets can display dynamic data and interactive elements
- **Secure Integration**: App tokens ensure secure access to your published content

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Project Structure

```
use_rulecms_create_react_app/
├── public/
│   ├── index.html          # Updated with RuleCMS meta tags
│   └── favicon.ico         # RuleCMS favicon
├── src/
│   ├── App.tsx             # Main app component with RuleCMS widget
│   ├── App.css             # Styling
│   └── index.tsx           # App entry point
├── .env.example            # Environment variables template
├── LICENSE                 # MIT License
└── README.md               # This file
```

## Learn More

- **RuleCMS Documentation**: [Coming Soon]
- **@rulecms/widget-react Package**: [npm package link]
- **RuleCMS Website**: [Website URL]

## Support

For questions, issues, or contributions:

- **GitHub Issues**: [Repository Issues URL]
- **Documentation**: [Documentation URL]
- **Community**: [Community/Discord URL]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by the RuleCMS team**

*This demo shows just how easy it is to integrate powerful, visual content management into any React application. Get started with RuleCMS today!*
