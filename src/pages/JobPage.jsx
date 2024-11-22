import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
const JobPage = () => {
    const { id } = useParams();
    const [loading,setLoading] = useState(true);
    const [job, setJob] = useState(null);
    const apiUrl = `/api/jobs/${id}`;
    useEffect(() => { 
        const fetchJob = async () => {
        try {       
            const res = await fetch(apiUrl);
            const data = await res.json();
            setJob(data);
        } catch (e) {
            console.log('Failed to fetch job', e);
         } finally { 
            setLoading(false);
         }
        }
        fetchJob();
    },[]);
    return (
        loading ? (<Spinner loading={loading} />
        ) : (
                <h2>{job.title}</h2>)
)
}

export default JobPage