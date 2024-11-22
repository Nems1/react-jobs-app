import {Route,createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
}
  from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import NotFoundPage from './pages/404NotFoundPage';
// create routes
/* const router = createBrowserRouter([
{
    path: '/',
    element:  <MainLayout>
                <HomePage />
              </MainLayout>
  },
  
  ]); */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}> 
      <Route index element={<HomePage />} /> 
      <Route path='/jobs' element={<JobsPage />} /> 
      <Route path='/jobs/:id' element={<JobPage />} /> 
      <Route path='/add-job' element={<AddJobPage />} />
      <Route path='*' element={<NotFoundPage />} /> 
    </Route>
  )  
);

const App = () => {
  return <RouterProvider router={router} />;
}
export default App;