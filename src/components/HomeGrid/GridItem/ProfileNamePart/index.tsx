import React from 'react';

const ProfileNamePart: React.FC = () => {
  return (
    <div className="profile-name-part">
      <div className="flex center profile-name sm-2-md">
        <p className="profile-name__label">Folio</p>
        <h3 className="profile-name__content">Ayomide Lawal</h3>
      </div>
    </div>
  );
};

export { ProfileNamePart };
