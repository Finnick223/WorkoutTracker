import { GridValidRowModel } from '@mui/x-data-grid';
import { ExerciseSet, ExerciseUpdate } from 'src/client/src';

export const createExerciseUpdate = (
  newRow: GridValidRowModel,
): ExerciseUpdate => {
  const shouldIncludeSet = (reps: number, weight: number) => {
    return reps !== undefined && weight !== undefined;
  };

  const sets: ExerciseSet[] = [
    shouldIncludeSet(newRow.reps1, newRow.weight1)
      ? ({ reps: newRow.reps1, weight: newRow.weight1 } as ExerciseSet)
      : undefined,
    shouldIncludeSet(newRow.reps2, newRow.weight2)
      ? ({ reps: newRow.reps2, weight: newRow.weight2 } as ExerciseSet)
      : undefined,
    shouldIncludeSet(newRow.reps3, newRow.weight3)
      ? ({ reps: newRow.reps3, weight: newRow.weight3 } as ExerciseSet)
      : undefined,
    shouldIncludeSet(newRow.reps4, newRow.weight4)
      ? ({ reps: newRow.reps4, weight: newRow.weight4 } as ExerciseSet)
      : undefined,
    shouldIncludeSet(newRow.reps5, newRow.weight5)
      ? ({ reps: newRow.reps5, weight: newRow.weight5 } as ExerciseSet)
      : undefined,
  ].filter((set): set is ExerciseSet => set !== undefined);

  return {
    id: newRow.id,
    name: newRow.name,
    sets,
  };
};
