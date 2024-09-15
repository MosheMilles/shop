import React from 'react';

const CustomRadioButton = ({ label, value, checked, onChange }) => {
  return (
    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        style={{ marginRight: '8px' }} // עיצוב כפתור הרדיו
      />
      <span style={{ color: 'white' }}>{label}</span> {/* עיצוב התווית */}
    </label>
  );
};

export default CustomRadioButton;