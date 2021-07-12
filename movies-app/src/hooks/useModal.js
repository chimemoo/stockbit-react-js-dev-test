import { useState } from 'react';

const useModal = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(null);

  const onClick = (newData = null) => {
    setVisible(!visible);
    setData(newData);
  };
  return [visible, data, onClick];
};

export default useModal;
