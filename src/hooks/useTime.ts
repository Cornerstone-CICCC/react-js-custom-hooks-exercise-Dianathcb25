import { useState, useEffect } from 'react';

type TimeType = 'day' | 'hour';

function useTime<T extends string>(type: TimeType): string {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const date = new Date();
    if (type === 'day') {
      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      setValue(days[date.getDay()]);
    } else if (type === 'hour') {
      setValue(date.getHours().toString());
    }
  }, [type]);
  return value;
}

export default useTime;
