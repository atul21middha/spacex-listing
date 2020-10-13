import React from 'react';

const ProgramItem = ({program, isLaunch, isLanding}) => {
  const {mission_name, launch_year, mission_id, links} = program;
  return (
    <div className='program-item'>
      <div className='program-item-card'>
      <div className='program-card-image'>
        <img src={links.mission_patch_small} alt='Mission Patch' height={150} width={150}/>
      </div>
      <div className='text-highlight marginTop mission-name'>{mission_name}</div>
      {mission_id.length > 0 &&
      <div className='marginTop'>
        <div className='text-highlight'>Mission ids</div>
        {mission_id.map((id, index) => (
          <div className='display-flex' key={index}>
            <div className='dot'/>
            <div className='mission-id-text'>{id}</div>
          </div>
        ))}
      </div>}
        <div className='marginTop'><span className='text-highlight'>Launch Year:</span> {launch_year}</div>
      <div className='marginTop'><span className='text-highlight'>Successful Launch:</span> {isLaunch ? isLaunch : 'false'}</div>
      <div className='marginTop'><span className='text-highlight'>Successful Landing:</span> {isLanding ? isLanding : 'false'}</div>

    </div>
    </div>
  );
};

export default ProgramItem;