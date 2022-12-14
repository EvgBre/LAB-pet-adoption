const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://cdn.vox-cdn.com/thumbor/ZIYdrCzy2EfRthlAZ0GYzsBLTxQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19266645/a_primal_evolution_talking_to_cartoon_legend_genndy_tartakovsky_2.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven???t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://i.pinimg.com/736x/b4/48/66/b448661c61c2abdf8768962ea231c612--crazy-cats-big-cats.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://i.pinimg.com/236x/cc/44/20/cc44209e7e7ca6b74ef8d6124269b282.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://thumbs.dreamstime.com/b/portrait-border-collie-dog-singing-front-microphone-214303446.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn???t get weirded out by the word ???moist.???",
      type: "dino",
      imageUrl: "https://www.meme-arsenal.com/memes/526f69d1f56e2b93309334759b757308.jpg"
    }
  ];
//   console.log("Here are all the pet's names:")
// for (let i = 0; i < pets.length; i++) {
// console.log(pets[i].name)
// }

const rootDiv = document.getElementById("root");

for (let i=0; i<pets.length; i++) {
  const pet=pets[i];
const bootStrapCardString = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-header">${pet.name}</h5>
    <img src="${pet.imageUrl}" onerror="this.src='images/missingimg-1.jpeg'" class="card-img-top" alt="A picture of a ${pet.type}">
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${pet.color}</li>
    <li class="list-group-item">${pet.specialSkill}</li>
    <li class="list-group-item" id="list-type">${pet.type}</li>
    <button class="btn btn-danger remove-me" id="delete--${pet.id}">I found a home!</button>
  </ul>
</div>`;
rootDiv.innerHTML+=bootStrapCardString;
}

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDom = (array) => {
  let domString = "";
  for (const pet of array) {
    domString += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-header">${pet.name}</h5>
    <img src="${pet.imageUrl}" onerror="this.src='images/missingimg-1.jpeg'" class="card-img-top" alt="A picture of a ${pet.type}">
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${pet.color}</li>  
    <li class="list-group-item">${pet.specialSkill}</li>
    <li class="list-group-item">${pet.type}</li>
    <button class="btn btn-danger remove-me" id="delete--${pet.id}">I found a home!</button>
  </ul>
</div>`;
  }
  renderToDom("#root", domString);
};
const filter = (array, typeString) => {
  const typeArray = []; //Filters terms with specific color

for (const member of array) {
  if (member.type === typeString) {
    typeArray.push(member);
  }
}; //Goes through array and adds qualifying member to array

return typeArray;
}

const showCatsButton = document.querySelector("#show-cats");
const showDogsButton = document.querySelector("#show-dogs");
const showDinosButton = document.querySelector("#show-dinos");
const showAllButton = document.querySelector("#show-all");

showCatsButton.addEventListener('click', () => {
  const kitties = filter(pets, 'cat');
  cardsOnDom(kitties);
});
showDogsButton.addEventListener('click', () => {
  const puppies = filter(pets, 'dog');
  cardsOnDom(puppies);
});
showDinosButton.addEventListener('click', () => {
  const saurus = filter(pets, 'dino');
  cardsOnDom(saurus);
});
showAllButton.addEventListener('click', () => {
  cardsOnDom(pets);
});

const form = document.querySelector('form');

const addPet = (e) => {
  e.preventDefault(); // EVERY TIME YOU CREATE A FORM

  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value.toLowerCase(),
    imageUrl: document.querySelector("#image").value
  }
  console.log(newPetObj)
  pets.push(newPetObj);
  cardsOnDom(pets);
  form.reset();
}
form.addEventListener('submit', addPet);

// let colorBox = function () {
//   let ptype = [i];

//   if (ptype = 'dog') {
//     document.getElementById("list-type").style.backgroundColor = '#A1E6E8';
//   } else if (ptype = 'cat') {
//     document.getElementById("list-type").style.backgroundColor = '#A1E8A7';
//   } else if (ptype = 'dino') {
//     document.getElementById("list-type").style.backgroundColor = '#E9C690';
//   }
// }
// 1. Target the app div
const app = document.querySelector("#root");

// 2. Add an event listener to capture clicks

app.addEventListener('click', (e) => {
  // console.log(e.target.id);
  
// 3. check e.target.id includes "delete"
  if (e.target.id.includes("delete")) {
    // destructuring: https://github.com/orgs/nss-evening-web-development/discussions/11
    const [, id] = e.target.id.split("--");

// 4. add logic to remove from array
    // .findIndex is an array method
    const index = pets.findIndex(e => e.id === Number(id));

    // .splice modifies the original array
    pets.splice(index, 1);

// 5. Repaint the DOM with the updated array
    cardsOnDom(pets);
  }
});

const startApp = () => {
  cardsOnDom(pets);
  e(); // ALWAYS LAST
}