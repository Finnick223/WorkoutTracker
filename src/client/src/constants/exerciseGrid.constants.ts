// eslint-disable-next-line import/no-extraneous-dependencies
import { GridColumnGroupingModel } from '@mui/x-data-grid';

export const columnGroupingModel: GridColumnGroupingModel = [
  {
    groupId: 'exercise',
    headerName: 'Exercise',
    children: [{ field: 'name' }],
  },
  {
    groupId: 'set1',
    headerName: 'set1',
    children: [{ field: 'weight1' }, { field: 'reps1' }],
  },
  {
    groupId: 'set2',
    headerName: 'set2',
    children: [{ field: 'weight2' }, { field: 'reps2' }],
  },
  {
    groupId: 'set3',
    headerName: 'set3',
    children: [{ field: 'weight3' }, { field: 'reps3' }],
  },
  {
    groupId: 'set4',
    headerName: 'set4',
    children: [{ field: 'weight4' }, { field: 'reps4' }],
  },
  {
    groupId: 'set5',
    headerName: 'set5',
    children: [{ field: 'weight5' }, { field: 'reps5' }],
  },
];

export const exerciseNames = [
  'Arnold Press',
  'Barbell Row',
  'Bench Press',
  'Bicep Curl',
  'Bulgarian Split Squat',
  'Calf Raise',
  'Cable Cross',
  'Chest Fly',
  'Chin-up',
  'Deadlift',
  'Dip',
  'Dumbbell Row',
  'Face Pull',
  'Farmers Carry',
  'Front Squat',
  'Goblet Squat',
  'Glute Bridge',
  'Hammer Curl',
  'Hip Thrust',
  'Incline Bench Press',
  'Lateral Raise',
  'Leg Press',
  'Lunges',
  'Overhead Press',
  'Pull-up',
  'Romanian Deadlift',
  'Shoulder Press',
  'Shrug',
  'Skull Crusher',
  'Squat',
  'Sumo Deadlift',
  'Tricep Extension',
  'Upright Row',
  'Reverse Fly',
];
