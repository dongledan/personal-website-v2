function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(arr) {
  for (let currIdx = 0; currIdx < arr.length; currIdx++) {
    const randomIdx = getRandom(currIdx, arr.length - 1);

    if (randomIdx !== currIdx) {
      const currVal = arr[currIdx];
      arr[currIdx] = arr[randomIdx];
      arr[randomIdx] = currVal;
    }
  }
  return arr;
}

const introContent = [
  `I'm a software engineer based in Queens, New York. `,
  `My tech stack is ['Node.js', 'Express', 'PostGreSQL'] for the backend and ['React', 'HTML5', 'CSS3'] for the frontend.`,
  `My passion is to deliver fast and seamless user experiences.`
]

let randomContent = [
  `My parents were deciding between Jackson and Danny. Jackson Li, nice to meet you. 🤝`,
  `test`

]

const endContent = [
  `I apologize, it seems like I rambled... ^1000 are you still there? 🤔 ^3000`
]

const combinedContent = introContent.concat(shuffle(randomContent), endContent);
console.log(combinedContent)
export const typewriterContentOptions = {
  strings: combinedContent,
  typeSpeed: 15,
  backDelay: 3000,
  loop: true,
  showCursor: false
}

export const typewriterTitleOptions = {
  strings: [`>> Danny Li`],
  typeSpeed: 30,
  showCursor: false,
  loop: false,
}