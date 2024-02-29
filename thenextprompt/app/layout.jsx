import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metaData = {
  title: "The next Prompt",
  description: "share your AI promots",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
