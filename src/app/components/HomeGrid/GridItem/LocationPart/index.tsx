import { MarkDownIcon } from '@/app/components/UI/icons/';
import React from 'react';

const LocationPart: React.FC = () => {
  return (
    <div className="location-part">
      <div className="location-part-content flex">
        <div>
          <MarkDownIcon size={24} />
        </div>
        <div className="location_address sm-2-md flex center">
          <p>Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  );
};

export { LocationPart };
// 0222654322;
