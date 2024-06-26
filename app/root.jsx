import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "./tailwind.css?url";


export const links = () => [
  { rel: "stylesheet", href: stylesheet },
];


export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-ivory">
        <Scripts />
        <ScrollRestoration />
        {children}

      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
