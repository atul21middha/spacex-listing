import React from 'react';
import ProgramItem from "./ProgramItem";

const ProgramsList = ({programsList, isLaunch, isLanding}) => {
  return (
    <div className='programs-list'>
      {programsList.map((program, index) => <ProgramItem key={index} program={program} isLaunch={isLaunch}
                                                         isLanding={isLanding}/>)}
    </div>
  );
};

export default ProgramsList;