export interface Step {
  numbers: number[];
  evaluated: number;
  moved: boolean;
}

const createStep = (
  numbers: number[],
  evaluated: number,
  moved: boolean
): Step => ({
  numbers: numbers.slice(0),
  evaluated,
  moved
});

function createSteps(startArray: number[]): Step[] {
  // slightly modified from version found on
  // https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/

  const arr = startArray.slice(0);
  const steps: Step[] = [];
  const len = arr.length;

  let i, j;

  for (i = 0; i < len; i++) {
    let isUnchanged = true;

    for (j = 0; j < len; j++) {
      let moved = false;
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        moved = true;
        isUnchanged = false;
      }
      steps.push(createStep(arr, j, moved));
    }

    // IF no two elements were swapped
    // by inner loop, then break
    if (isUnchanged) {
      break;
    }
  }

  const step0 = createStep(startArray, 0, false);
  steps.unshift(step0);

  return steps;
}

export default createSteps;
