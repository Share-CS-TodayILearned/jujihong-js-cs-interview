function solution(N, stages) {
  let arr = [];

  for (let i = 1; i < N + 1; i++) {
    let failedPeople = stages.filter(stage => stage === i).length;
    let reachedStagePeople = stages.filter(stage => stage >= i).length;
    arr.push([i, failedPeople / reachedStagePeople]);
  }

  arr.sort((a, b) => b[1] - a[1]);

  return arr.map(x => x[0]);
}

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/42889

function solution2(answers) {
  let answer = [];

  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let firstCount = 0;
  let secondCount = 0;
  let thirdCount = 0;

  while (first.length < answers.length) {
    first = [...first, ...first];
  }

  while (second.length < answers.length) {
    second = [...second, ...second];
  }

  while (third.length < answers.length) {
    third = [...third, ...third];
  }

  for (let i = 0; i < answers.length; i++) {
    if (first[i] === answers[i]) firstCount++;
    if (second[i] === answers[i]) secondCount++;
    if (third[i] === answers[i]) thirdCount++;
  }

  const max = Math.max(firstCount, secondCount, thirdCount);

  if (firstCount === max) answer.push(1);
  if (secondCount === max) answer.push(2);
  if (thirdCount === max) answer.push(3);

  return answer;
}

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/42840
