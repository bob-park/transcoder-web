import { SlicePattern } from 'zustand';

export const createCounterSlice: SlicePattern<CounterState> = (set) => ({
  count: 0,
  increase: () =>
    set(
      (state) => {
        return {
          count: state.count + 1,
        };
      },
      false,
      { type: 'counter/increate' },
    ),
  decrease: () =>
    set(
      (state) => {
        return {
          count: state.count - 1,
        };
      },
      false,
      { type: 'counter/decrease' },
    ),
});
