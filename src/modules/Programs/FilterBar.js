import React, {useEffect, useState} from 'react';

const years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
const options = ['true', 'false'];

const FilterBar = ({onUpdateParams}) => {
  const [launchYear, setLaunchYear] = useState('');
  const [isLaunch, setIsLaunch] = useState('');
  const [isLanding, setIsLanding] = useState('');

  useEffect(() => {
    const params = {
      limit: 100,
      ...(launchYear && {launch_year: launchYear}),
      ...(isLaunch === 'true' && {launch_success: isLaunch}),
      ...(isLanding === 'true' && {land_success: launchYear})
    };
    onUpdateParams(params);
  }, [launchYear, isLanding, isLanding])

  return (
    <div className='filter-root'>
      <div className='card'>
        <h3>Filter</h3>

        <div className='filterCategory'>
          <div className='filterTitle'>Launch Year</div>
          <div className='filterOptions'>
            {years.map((year, index) => (
              <div className='filterOption'>
                <button key={index} className={`filter-option-button pointer ${launchYear === year ? 'active' : ''}`}
                        onClick={() => setLaunchYear(launchYear === year ? '' : year)}>{year}</button>
              </div>
            ))}
          </div>
        </div>

        <div className='filterCategory'>
          <div className='filterTitle'>Successful Launch</div>
          <div className='filterOptions'>
            {options.map((option, index) => (
              <div className='filterOption'>
                <button key={index} className={`filter-option-button pointer ${isLaunch === option ? 'active' : ''}`}
                        onClick={() => setIsLaunch(isLaunch === option ? '' : option)}>{option}</button>
              </div>
            ))}
          </div>
        </div>

        <div className='filterCategory'>
          <div className='filterTitle'>Successful Landing</div>
          <div className='filterOptions'>
            {options.map((option, index) => (
              <div className='filterOption'>
                <button key={index} className={`filter-option-button pointer ${isLanding === option ? 'active' : ''}`}
                        onClick={() => setIsLanding(isLanding === option ? '' : option)}>{option}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;