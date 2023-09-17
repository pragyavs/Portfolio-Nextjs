import React from 'react';


const TemperatureBox = ({ temp }: any) => {
  return (
    <div className="box">
      {temp && (
        <div className="flex mb-4">
          <p className="w-64 sm:w-41 text-green">Temperature:</p>
          <p>{temp} °C</p>
        </div>
      )}

      <style jsx>{`
        .box {
          background-color: rgba(255, 255, 255, 0.8);
          padding: 20px;
          border-radius: 10px;
          max-width: 400px;
          width: 100%;
        }
        .flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .text-green {
          color: #00cc00;
        }
      `}</style>
    </div>
  );
};

export default TemperatureBox;
