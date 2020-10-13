import React, {useEffect, useState} from 'react';
import axios from '../../utils/axios';
import FilterBar from "./FilterBar";
import ProgramsList from "./ProgramsList";

const Programs = () => {
  const [programsList, setProgramsList] = useState([]);
  const [launchYear, setLaunchYear] = useState('');
  const [isLaunch, setIsLaunch] = useState('');
  const [isLanding, setIsLanding] = useState('');

  useEffect(() => {
    const getProgramsList = async () => {
      const params = {
        limit: 100,
        ...(launchYear && {launch_year: launchYear}),
        ...(isLaunch === 'true' && {launch_success: isLaunch}),
        ...(isLanding === 'true' && {land_success: isLanding})
      };
      try {
        const data = await axios.get('/launches', {params});
        setProgramsList(data.data);
      } catch (error) {
        console.log("error", error)
      }
    };
    getProgramsList();
  }, [launchYear, isLanding, isLaunch]);

  return (
    <div>
      <h2>SpaceX Launch Programs</h2>

      <div className='content'>
        <FilterBar launchYear={launchYear} isLaunch={isLaunch} isLanding={isLanding} setLaunchYear={setLaunchYear}
                   setIsLaunch={setIsLaunch} setIsLanding={setIsLanding}/>
        {programsList.length > 0 ?
          <ProgramsList programsList={programsList} isLaunch={isLaunch} isLanding={isLanding}/>
          :
          <div className='no-programs'>No Programs Listed</div>
        }
      </div>
    </div>
  );
};

export default Programs;