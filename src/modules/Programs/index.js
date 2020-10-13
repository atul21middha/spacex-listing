import React, {useEffect, useState} from 'react';
import axios from '../../utils/axios';
import FilterBar from "./FilterBar";
import ProgramsList from "./ProgramsList";

const Programs = () => {
  const [programsList, setProgramsList] = useState([]);
  const [params, setParams] = useState({limit: 100});

  const onUpdateParams = (updatedParams) => {
    setParams(updatedParams)
  };

  useEffect(() => {
    const getProgramsList = async () => {
      try {
        const data = await axios.get('/launches', {params});
        setProgramsList(data.data);
      } catch (error) {
        console.log("error", error)
      }
    };
    getProgramsList();
  }, [params]);

  return (
    <div>
      <h2>SpaceX Launch Programs</h2>
      <div className='content'>
        <FilterBar onUpdateParams={onUpdateParams} />
        <ProgramsList programsList={programsList}/>
      </div>
    </div>
  );
};

export default Programs;