import React from 'react';

const Navber = () => {
    return (
      <div className="bg-base-200 shadow-sm">
        <div className="navbar container mx-auto">
          <div className="flex-1">
            <a className=" text-2xl font-bold text-[#2563EB]">
              Ph-Univercity
            </a>
          </div>

          <div className="flex gap-2">
            <button className="btn btn-dash btn-primary">Sign up</button>
            <button className="btn btn-dash btn-primary">Login</button>
            <button className="btn btn-primary">+ New Assignment </button>
          </div>
        </div>
      </div>
    );
};

export default Navber;