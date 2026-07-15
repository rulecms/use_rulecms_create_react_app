import React from 'react';
import { RuleCMSWidgetProvider, RuleCMSWidget } from '@rulecms/widget-react';
import './App.css';

// Required since @rulecms/widget-react v15 — register the default component library.
const rulecmsLibraries = {
  default: () => import('@rulecms/source-components-react'),
};

function App() {
  // Production values from environment variables
  const publishedKey = process.env.REACT_APP_PUBLISHED_KEY || "ab0ea12b-af32-4d61-90b2-6af534f87290---widget-27eec7b6-669a-4ceb-b37c-14fdb7abb743";
  const appToken = process.env.REACT_APP_RULECMS_TOKEN || "lEYWhW85gwxHXj3cyomTsNra6MaXu8Q90aa1Q5zjNNVUdrGko7VYLZtMH5n9FI5E";
  const endpoint = process.env.REACT_APP_RULECMS_ENDPOINT || "https://rulecms.com";

  return (
    <RuleCMSWidgetProvider token={appToken} endpoint={endpoint} libraries={rulecmsLibraries}>
      <div className="App">
        <header className="App-header">
          <h1>RuleCMS Widget Demo</h1>
          <p className="App-description">
            This is a demonstration of how to integrate RuleCMS widgets into a Create React App
          </p>
        </header>

        <main className="App-main">
          <section className="widget-demo-section">
            <h2>Demo RuleCMS Widget</h2>
            <p>
              The widget below is rendered using the <code>RuleCMSWidget</code> component
              from the <code>@rulecms/widget-react</code> package.
            </p>

            <div className="info-card">
              <div className="info-card-content">
                <strong>Getting Started</strong>
                <p>
                  If you're seeing an error below, you need to replace the demo values with your actual published key and app token.
                  Log into your <a href="https://rulecms.com" target="_blank" rel="noopener noreferrer">RuleCMS.com</a> account to get them.
                </p>
              </div>
            </div>

            <div className="widget-container">
              <RuleCMSWidget
                publishedKey={publishedKey}
              />
            </div>
          </section>

          <section className="integration-info">
            <h2>Integration Steps</h2>
            <ol>
              <li>Install the package: <code>npm install @rulecms/widget-react</code></li>
              <li>Wrap your app with <code>RuleCMSWidgetProvider</code></li>
              <li>Add <code>RuleCMSWidget</code> component with your published key and app token</li>
              <li>That's it! Your widget is now integrated and ready to display</li>
            </ol>
          </section>

          <section className="next-steps">
            <h2>Next Steps</h2>
            <ul>
              <li>Replace the demo published key with your actual widget's published key</li>
              <li>Set your app token in the <code>.env.local</code> file</li>
              <li>Create and publish more widgets in your RuleCMS composer</li>
              <li>Explore the full power of RuleCMS for your React applications</li>
            </ul>
          </section>
        </main>

        <footer className="App-footer">
          <p>
            Built with <span className="heart">❤️</span> using{' '}
            <a href="https://rulecms.com" target="_blank" rel="noopener noreferrer">
              RuleCMS
            </a>{' '}
            and Create React App
          </p>
        </footer>
      </div>
    </RuleCMSWidgetProvider>
  );
}

export default App;
