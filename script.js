const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "test",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "test",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "test",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "test",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObject);
};

addSubmission(submissions, "Andrew", 93, "test");
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
deleteSubmissionByIndex(submissions, 4);
console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((element) => {
    element.name === name;
  });
  array.splice(index, 1);
};
deleteSubmissionByName(submissions, "Jill");
console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60 ? true : false;
  //shorter: score >=60;
};

editSubmission(submissions, 2, 61);
console.log(submissions);

// splice(start, delete, replace)

const findSubmissionByName = (array, name) => {
  return array.filter((student) => {
    return student.name === name;
  });
};

console.log(findSubmissionByName(submissions, "Joe"));

const findLowestScore = (array) => {
  let lowestScore = array[0];
  array.forEach((student) => {
    if (student.score < lowestScore.score) {
      lowestScore = student;
    }
  });
  return lowestScore;
};

console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
  let sum = 0;
  for (let student of array) {
    sum += student.score;
  }
  return sum / array.length;
};

console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  return array.filter((student) => student.passed === true);
};

console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  return array.filter((student) => student.score >= 90);
};

console.log(filter90AndAbove(submissions));

//Extended Challenges

const createRange = (start, end) => {
  let newArray = [];
  for (i = start; i <= end; i++) {
    newArray.push(i);
  }
  return newArray;
};
console.log(createRange(2, 8));

const countElements = (array) => {
  let newArray = [...new Set(array)];
  let newObject = {};
  for (let letter of newArray) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
      if (letter == array[i]) {
        counter++;
      }
    }
    newObject[letter] = counter;
  }
  return newObject;
};
console.log(countElements(["a", "b", "a", "c", "a", "b"]));

//solution found online working with Matt Wong.
//could be written with .filter() or a .forEach() to loop through each part of the array to count it. [...new Set(array)] finds the unique elements in the array.