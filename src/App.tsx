import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./Pages/Homepage";
import Layout from "./Components/Layout";
import AboutMePage from "./Pages/AboutMePage";
import BlogPage from "./Pages/BlogPage";
import ProjectsPage from "./Pages/ProjectsPage";

function App() {

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout/>,
			children: [
				{
					path: "/",
					element: <Homepage/>
				},
				{
					path: "/about",
					element: <AboutMePage/>
				},
				{
					path: "/blog",
					element: <BlogPage/>
				},
				{
					path: "projects",
					element: <ProjectsPage/>
				}
			]
		}
	])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
