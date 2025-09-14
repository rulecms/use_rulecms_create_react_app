# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **RuleCMS Widget Demo** application built with Create React App and TypeScript. It demonstrates how to integrate RuleCMS widgets into React applications using the `@rulecms/widget-react` package.

**Core Purpose**: Show developers how to embed dynamic CMS widgets created in the RuleCMS visual composer into any React application with minimal code.

## Development Commands

### Primary Development Commands
```bash
# Install dependencies
npm install

# Start development server (opens at http://localhost:3000)
npm start

# Run tests in interactive watch mode
npm test

# Build for production
npm run build
```

### Environment Setup
```bash
# Copy environment template and configure tokens
cp .env.example .env.local
# Edit .env.local with actual RuleCMS app token
```

## Architecture & Key Components

### RuleCMS Integration Pattern
The app demonstrates the standard RuleCMS integration pattern:

1. **Provider Wrapper**: `RuleCMSWidgetProvider` wraps the entire app with authentication
2. **Widget Components**: `RuleCMSWidget` components render individual widgets by published key
3. **Token Authentication**: App tokens provide secure access to published widgets

### File Structure & Responsibilities
- `src/App.tsx` - Main demo component showcasing RuleCMS widget integration patterns
- `src/App.css` - Complete styling for the demo interface with responsive design
- `src/index.tsx` - Standard React app entry point
- `.env.example` - Template for required environment variables

### Key Dependencies
- `@rulecms/widget-react` - Core RuleCMS widget rendering package
- `react` v19+ - Latest React with concurrent features
- `typescript` - Type safety and development experience
- Standard Create React App testing and build tools

## RuleCMS-Specific Concepts

### Authentication Flow
- **App Token**: Set via `REACT_APP_RULECMS_TOKEN` environment variable
- **Provider**: `RuleCMSWidgetProvider` handles authentication and widget context
- **Security**: Tokens should never be committed to version control

### Widget Integration
- **Published Keys**: Unique identifiers for widgets created in RuleCMS composer
- **Demo Key**: Currently uses `54dd0702-2c1c-4472-9ba9-c06514107a84---widget-9a31b6c8-ed17-484f-864c-bdab49c68ec7`
- **Dynamic Rendering**: Widgets are fetched and rendered client-side

### Environment Variables Required
- `REACT_APP_RULECMS_TOKEN` - Your RuleCMS app token (required for widget access)

## Development Patterns

### When Adding New Widgets
1. Create and publish widget in RuleCMS composer
2. Copy the published key from RuleCMS interface
3. Add new `RuleCMSWidget` component with the published key
4. No additional configuration needed - widgets are self-contained

### Testing Widget Integration
- Widgets require valid app tokens to render properly
- Demo values will show error states if tokens are invalid
- Use browser dev tools to inspect network requests to RuleCMS API

### Styling Considerations
- Widgets inherit parent container styling
- RuleCMS widgets are designed to be responsive
- Custom widget container styling in `.widget-container` class
- Demo uses gradient backgrounds and card layouts for visual appeal

## Common Development Tasks

### Updating Demo Widget
Replace the `publishedKey` constant in `src/App.tsx` with your actual published widget key.

### Adding Multiple Widgets
Create multiple `RuleCMSWidget` components within the same `RuleCMSWidgetProvider` wrapper.

### Environment-Specific Configuration
Use different `.env.local` files for development vs staging environments with appropriate RuleCMS app tokens.

## Build and Deployment Notes

### Production Builds
- Ensure `REACT_APP_RULECMS_TOKEN` is set in production environment
- Build output goes to `build/` directory
- Static hosting compatible (Netlify, Vercel, S3, etc.)

### Security Considerations
- App tokens are exposed in client-side code (by design for public widgets)
- Use environment-specific tokens with appropriate permissions
- Never commit actual tokens to version control