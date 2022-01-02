enum Minute {
  HALF_HOUR,
  START_HOUR,
}

enum TimeMode {
  AM,
  PM,
}

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
type Hour = typeof hours[number];

type Time = {
  hour: Hour;
  minute: Minute;
  timeMode: TimeMode;
};

/**
 * Updates the given time to half an hour later.
 * @param time The given time
 * @returns The time updated to half an hour later
 */
export function addHalfAnHour(time: Time): Time {
  return {
    ...time,
    hour:
      time.minute === Minute.HALF_HOUR
        ? ((time.hour === 12 ? 1 : time.hour + 1) as Hour)
        : time.hour,
    minute:
      time.minute === Minute.HALF_HOUR ? Minute.START_HOUR : Minute.HALF_HOUR,
    timeMode:
      time.hour === 11 && time.minute === Minute.HALF_HOUR
        ? time.timeMode === TimeMode.AM
          ? TimeMode.PM
          : TimeMode.AM
        : time.timeMode,
  };
}
