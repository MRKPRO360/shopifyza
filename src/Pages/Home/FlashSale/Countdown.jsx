import Countdown from 'react-countdown';

const element = (text, counted) => {
  return (
    <div className='flex flex-col items-center mr-4 text-textDark'>
      <span className='mb-1 text-sm font-semibold'>{text}</span>
      <span className='text-3xl font-bold'>{counted}</span>
    </div>
  );
};

function StyledCountdown() {
  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <span className='font-bold text-green-500'>Countdown Complete!</span>
      );
    } else {
      return (
        <div className='flex items-center text-center'>
          {/* <div className='flex flex-col items-center mr-4 text-textDark'>
            <span className='mb-1 text-sm font-semibold'>Days</span>
            <span className='text-3xl font-bold'>{days}</span>
          </div> */}
          {element('Days', days)}
          <span className='mr-2 text-2xl font-bold text-tertiary'>:</span>
          {/* <div className='flex flex-col items-center mr-4 text-textDark'>
            <span className='mb-1 text-sm font-semibold'>Hours</span>
            <span className='text-3xl font-bold'>{hours}</span>
          </div> */}
          {element('Hours', hours)}
          <span className='mr-2 text-2xl font-bold text-tertiary'>:</span>
          {element('Minutes', minutes)}
          <span className='mr-2 text-2xl font-bold text-tertiary'>:</span>
          {element('Seconds', seconds)}{' '}
        </div>
      );
    }
  };

  return (
    <Countdown
      date={Date.now() + 86400000 * 10} // Countdown for 10 day
      renderer={countdownRenderer}
    />
  );
}

export default StyledCountdown;
