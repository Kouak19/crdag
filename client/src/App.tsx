import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Redirect, Switch } from "wouter";
import type { ReactNode } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Payments from "./pages/Payments";
import Cards from "./pages/Cards";
import Investments from "./pages/Investments";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import { AUTH_SESSION_KEY, getAuthenticatedUser } from "./data/defaultUsers";
import BlockAlert from "./components/BlockAlert";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const isAuthenticated = sessionStorage.getItem(AUTH_SESSION_KEY) === "true";
  const user = getAuthenticatedUser();

  if (!isAuthenticated) return <Redirect to="/login" />;

  return (
    <>
      {user && <BlockAlert user={user} />}
      {children}
    </>
  );
}

function Router() {
  return (
    <Switch>
      <Route path={"/login"} component={Login} />
      <Route path={"/"}>
        <ProtectedRoute><Home /></ProtectedRoute>
      </Route>
      <Route path={"/accounts"}>
        <ProtectedRoute><Accounts /></ProtectedRoute>
      </Route>
      <Route path={"/payments"}>
        <ProtectedRoute><Payments /></ProtectedRoute>
      </Route>
      <Route path={"/cards"}>
        <ProtectedRoute><Cards /></ProtectedRoute>
      </Route>
      <Route path={"/investments"}>
        <ProtectedRoute><Investments /></ProtectedRoute>
      </Route>
      <Route path={"/settings"}>
        <ProtectedRoute><Settings /></ProtectedRoute>
      </Route>
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
