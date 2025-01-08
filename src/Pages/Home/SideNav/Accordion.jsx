import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

function Accordion({ text, list, id }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <input
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        readOnly
        checked={open}
        type='checkbox'
        id={id}
        className='sr-only peer'
      />
      <label
        className='flex items-center justify-between w-full cursor-pointer'
        htmlFor={id}
      >
        <p> {text}</p>
        {open ? (
          <MdKeyboardArrowDown className='text-2xl' />
        ) : (
          <MdKeyboardArrowRight className='text-2xl' />
        )}
      </label>
      {open && (
        <ul className='text-[16px] space-y-1'>
          {list.map((el, key) => (
            <li key={key}>{el}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Accordion;
