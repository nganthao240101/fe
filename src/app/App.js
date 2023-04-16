import React from "react";
import rootRoutes from "./components/web/rootRoutes";
import NotFound from "./NotFound";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
/** Redux Provider */
import { Provider } from "react-redux";
/** Store */
import store from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <NotificationContainer />
          <BrowserRouter>
            <Switch>
              <Route path="/" component={rootRoutes} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
