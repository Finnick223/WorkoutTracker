import { GridRowModel } from '@mui/x-data-grid';
import { ExerciseUpdate } from 'src/client/src';

export const createExerciseUpdate = (newRow: GridRowModel): ExerciseUpdate => {
  const shouldIncludeSet = (
    reps: number | undefined,
    weight: number | undefined,
  ) => {
    return reps !== undefined && weight !== undefined;
  };

  return {
    id: newRow.id,
    name: newRow.name,
    sets: [
      shouldIncludeSet(newRow.reps1, newRow.weight1)
        ? { reps: newRow.reps1, weight: newRow.weight1 }
        : undefined,
      shouldIncludeSet(newRow.reps2, newRow.weight2)
        ? { reps: newRow.reps2, weight: newRow.weight2 }
        : undefined,
      shouldIncludeSet(newRow.reps3, newRow.weight3)
        ? { reps: newRow.reps3, weight: newRow.weight3 }
        : undefined,
      shouldIncludeSet(newRow.reps4, newRow.weight4)
        ? { reps: newRow.reps4, weight: newRow.weight4 }
        : undefined,
      shouldIncludeSet(newRow.reps5, newRow.weight5)
        ? { reps: newRow.reps5, weight: newRow.weight5 }
        : undefined,
    ].filter((set) => set !== undefined),
  };
};
