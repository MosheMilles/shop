import React, { useState } from 'react';
import CustomRadioButton from './CustomRadioButton';
import { useNavigate } from 'react-router-dom';


const CustomRadioGroup = ({ options, name, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.value)
    setSelectedValue(e.target.value);
    onChange(e.target.value);
    // if (e.target.value === 'new') {
    //   navigate('/new'); // החלף בנתיב הרצוי
    // }
  };

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      {options.map((option) => (
        <CustomRadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default CustomRadioGroup;