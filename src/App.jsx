import {Route,createRoutesFromElements,
        createBrowserRouter,RouterProvider,
      }
      from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobPage,{ jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import NotFoundPage from './pages/404NotFoundPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  // add new job 
  const addJob = async (newJob) => { 
  // post the new job to the backend
    const res = await fetch('/api/jobs', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  }
  // update job
  const updateJob = async (job) => { 
  // post the new job to the backend
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  }
  
  // Delete job
  const deleteJob = async (id) => {
      // Delete the job from the backend
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<MainLayout />}> 
        <Route
          index
          element={<HomePage />}
        /> 
        <Route
          path='/jobs'
          element={<JobsPage />}
        /> 
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob}/>}
          loader={jobLoader}
        /> 
        <Route
          path='/jobs/:id'
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path='/add-job'
          element={<AddJobPage addJobSubmit={addJob} />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        /> 
      </Route>
    )  
  );
  return <RouterProvider router={router} />;
}
export default App;