import React from 'react';

function EventButton() {
  function callPort(parameter) {
    const url = 'http://localhost:3001?param=${parameter}';
    window.location.href = url;
  }

  return (
    <div>
      <button className="bg-blue-500 py-2 px-4 w-30 h-20 rounded-md"
      onClick={() => callPort('parameter_value')}>
        
      </button>
    </div>
  );
}

export default EventButton;