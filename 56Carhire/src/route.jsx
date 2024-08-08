import Layout from "./Layout.jsx";
import Hero from "./page/hero/Hero.jsx";

export const Route = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/hero',
                element:  <Hero />, 
            }
        ]

    },
  
]