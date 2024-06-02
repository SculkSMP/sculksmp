

let ver = `1.0-preview`
document.addEventListener('DOMContentLoaded', function() {
  // Hide all sections initially
  const searchInput = document.getElementById('filter');
  const autoNameInputs = ['peepo', 'pepe', 'rock', 'meme', 'rainbow', 'think', 'kappa', 'jeb', 'dance', 'paper', 'mc', 'clown', 'killer', 'omega', 'ayo', 'world', 'blob', 'kitty', 'amogus', 'amongus', 'dance', 'yt', 'youtube', 'doge', 'mc', 'minecraft', 'parrot', 'dances', 'mr', 'puffer', 'pensive', 'dyn', 'original', 'watermelon', 'middle', 'finger', 'bat', 'cursed', 'kirb', 'kirby', 'cool', 'Caught', 'day', 'the', 'caught', 'in', 'oh', 'grass', 'feels', 'wower', 'chad', 'gigachad', 'muslim', 'better', 'missing', 'cry', 'batman', 'big', 'dolphin', 'pixel', 'rainbow', 'sad', 'lemon', 'take', 'my', 'yes', 'no', 'why', 'you', 'u', 'uwu', 'crying', 'sure', 'buddy', 'frick', 'problem'];

  function autoName(str, dictionary) {

str = str.replace(/_/g, ' ');

let result = [];
let remaining = str;
while (remaining.length > 0) {
let found = false;
for (let i = remaining.length; i > 0; i--) {
  let substr = remaining.slice(0, i);
  if (dictionary.includes(substr.toLowerCase())) {
      result.push(substr.charAt(0).toUpperCase() + substr.slice(1).toLowerCase());
      remaining = remaining.slice(i);
      if (remaining.startsWith(' ')) {
          remaining = remaining.slice(1);
      }
      found = true;
      break;
  }
}
if (!found) {
      let nextSpaceIndex = remaining.indexOf(' ');
      if (nextSpaceIndex !== -1) {
      
          let word = remaining.slice(0, nextSpaceIndex);
          result.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
          remaining = remaining.slice(nextSpaceIndex + 1);
      } else {
      
          result.push(remaining.charAt(0).toUpperCase() + remaining.slice(1).toLowerCase());
          break;
      }
  }
}
return result.join(' ');
}

function findUrlByName(jsonArray, name) {
for (let i = 0; i < jsonArray.length; i++) {
  if (jsonArray[i].name === name) {
      return jsonArray[i].url;
  }
}
return null; // Return null if the name is not found
}

function getRandomUrl(jsonArray) {
    const randomIndex = Math.floor(Math.random() * jsonArray.length);
    return jsonArray[randomIndex].url;
}


  // Fetch JSON data from the server
  fetch('https://sculksmp.github.io/dismoji-db/dismoji-main-emojis.json')
      .then(response => response.json())
      .then(data => {
        if (searchInput.value) {
          const searchTerm = searchInput.value.toLowerCase();
              if (searchTerm === '') {
                loadLinks(data)
              } else {
                const filteredResults = data.filter(item => autoName(item.name, autoNameInputs).toLowerCase().includes(searchTerm));
                if (searchTerm !== '') {
                    loadLinks(filteredResults)
            }
            }
        } else {
            loadLinks(data)
        }
        
        
          // Add an event listener to the search input
          searchInput.addEventListener('input', () => {
              const searchTerm = searchInput.value.toLowerCase();
              if (searchTerm === '') {
                loadLinks(data)
              } else {
                const filteredResults = data.filter(item => autoName(item.name, autoNameInputs).toLowerCase().includes(searchTerm));
                if (searchTerm !== '') {
                    loadLinks(filteredResults)
                }
              }
              
          });
      })
      .catch(error => {
          console.error('Error fetching JSON data:', error);
      });
  document.querySelectorAll('div[id]').forEach(div => div.style.display = 'none');
  
  // Initialize and do things with hash-based section
  //initialize();
  showSectionBasedOnHash();

  // Fade out loader after a delay (animation)
  fadeOutLoader();

  // Dark mode toggle
  document.getElementById('checkbox').addEventListener('change', function(event) {
      document.body.classList.toggle('dark-mode', event.target.checked);
  });

  // File input listener for uploading data
  document.getElementById('fileInput').addEventListener('change', handleFileUpload);
});

// Hash change listener for navigating sections
window.addEventListener('hashchange', showSectionBasedOnHash);

function fadeOutLoader() {
  const loader = document.querySelector(".loading");
  if (loader) {
      loader.style.opacity = 0;
      setTimeout(() => loader.style.display = 'none', 1000);
  }
}

function showSectionBasedOnHash() {
  const hash = window.location.hash || '#home'; // Default to home if no hash is present
  
  document.querySelectorAll('div[id]').forEach(section => {
      section.classList.remove('active'); // This will start the fade-out process
  });

  setTimeout(() => { // Delay to allow for fade-out before changing the display property
      document.querySelectorAll('div[id]').forEach(section => {
          section.style.display = 'none';
      });

      const activeSection = document.querySelector(hash);
      setActive(activeItem)
      if (activeSection) {
          activeSection.style.display = 'block'; // Make the section visible before starting the fade-in
          setTimeout(() => {
              activeSection.classList.add('active'); // This starts the fade-in process
          }, 20); // Timeout ensures that the display change has been applied
      }
  }, 500); // Match this delay to the CSS transition duration
}



// Initialize underline position and width
const activeItem = menu.querySelector('.active');
if (activeItem) setActive(activeItem);

function setActive(element) {
  if (!element) return; // If the element doesn't exist, exit the function
  const underline = document.querySelector('.underline'); // Assuming you have an element with the class 'underline'
  if (underline) {
      const { offsetLeft: left, offsetWidth: width } = element;
      underline.style.left = `${left}px`;
      underline.style.width = `${width}px`;
  }
}


// Event listener for menu items
menu.addEventListener('click', (e) => {
if (e.target.tagName === 'A') {
  const parentLi = e.target.parentElement;
  const currentlyActive = menu.querySelector('.active');
  // Check if there's a currently active item before removing the class
  if (currentlyActive) {
    currentlyActive.classList.remove('active');
  }
  parentLi.classList.add('active');
  setActive(parentLi);
}
});

//document.addEventListener('DOMContentLoaded', function() {
  //loadLinks()
  function splitIntoWords(str, dictionary) {
    // Replace underscores with spaces to treat them as word separators
    str = str.replace(/_/g, ' ');

    let result = [];
    let remaining = str;
    while (remaining.length > 0) {
        let found = false;
        for (let i = remaining.length; i > 0; i--) {
            let substr = remaining.slice(0, i);
            // Check if the substring (case-insensitive) is in the dictionary
            if (dictionary.includes(substr.toLowerCase())) {
                // Capitalize the first letter and make the rest lowercase
                result.push(substr.charAt(0).toUpperCase() + substr.slice(1).toLowerCase());
                remaining = remaining.slice(i);
                // If there is a space at the beginning of the remaining string, trim it
                if (remaining.startsWith(' ')) {
                    remaining = remaining.slice(1);
                }
                found = true;
                break;
            }
        }
        // If no dictionary match is found, process the next word separated by space
        if (!found) {
            let nextSpaceIndex = remaining.indexOf(' ');
            if (nextSpaceIndex !== -1) {
                // Capitalize the next word and continue
                let word = remaining.slice(0, nextSpaceIndex);
                result.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
                remaining = remaining.slice(nextSpaceIndex + 1);
            } else {
                // Capitalize the last part of the 
                result.push(remaining.charAt(0).toUpperCase() + remaining.slice(1).toLowerCase());
                break;
            }
        }
    }
    return result.join(' ');
}


function loadLinks(emojis, display_splits=false) {
  
  
  document.getElementById('ver').textContent = `Dismoji v${ver}`

  const container = document.querySelector('.emoji-container');
  // Clear existing content
  container.innerHTML = '';

  let currentGroup = [];
  const groups = [];

    if (display_splits) {
        emojis.splice(14, 0, { url: "split", name: "Pepe the Frog" });
        emojis.splice(45, 0, { url: "split", name: "Meme" });
        emojis.splice(67, 0, { url: "split", name: "Rainbow" });
        emojis.splice(97, 0, { url: "split", name: "Meme Face" });
        emojis.splice(125, 0, { url: "split", name: "Loading animation"});
    }

    console.log(emojis)
  emojis.forEach(link => {
    if (link.url === "split") {
        // Handle the split: push the current group to groups and start a new group
        if (currentGroup.length > 0) {
            groups.push(currentGroup);
            currentGroup = []; // Reset for the next group
        }
        // Add a new group starting with the title
        currentGroup.push({ isTitle: true, name: link.name });
    } else {
        // Add the link to the current group
        currentGroup.push(link);
    }
});
  // Don't forget to add the last group if it's not empty
  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  }

  // Now, create the DOM elements for each group
  groups.forEach(group => {
    let groupTitleAdded = false
    const isSplit = group[0] === 'split';
    if (isSplit) {
      group.shift(); // Remove the 'split' marker
      const splitTitle = group.shift(); // Assume the next item is the title

      // Create and add the split title
      if (splitTitle) {
        
      }
    } 

    // Add emojis for the current group
    group.forEach(link => {
      if (link.isTitle) {
        // This item is a group title
        const splitSeparator = document.createElement('hr'); // Creates a visual separator
        container.appendChild(splitSeparator);
      
        const splitNameElement = document.createElement('div');
        splitNameElement.textContent = link.name;
        const splitClass = link.name.replace(/ /g, '-');
        splitNameElement.classList.add('split-name', `${splitClass}`);
        container.appendChild(splitNameElement);
        
        
        groupTitleAdded = true
      };

    if (!link.isTitle) {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.style.display = 'flex';
        item.style.justifyContent = 'center';
        item.style.alignItems = 'center';

      
        const img = document.createElement('img');
        img.src = link.url; // Assuming this link points directly to an image
        img.alt = 'Preview';
        img.loading = 'lazy';
        //img.style.objectFit = 'contain'; // Maintain aspect ratio
        img.width = 128; // Set the maximum width
      	//img.height = 128; // Set the maximum height
      	item.appendChild(img);
      

	    const a = document.createElement('a');
    	a.href = link.url;
  		a.textContent = 'Link';
      	a.className = 'hidden-link';

      	const name = document.createElement('p');
        let dictionary = ['peepo', 'pepe', 'rock', 'meme', 'rainbow', 'think', 'kappa', 'jeb', 'dance', 'paper', 'mc', 'clown', 'killer', 'omega', 'ayo', 'world', 'blob', 'kitty', 'amogus', 'amongus', 'dance', 'yt', 'youtube', 'doge', 'mc', 'minecraft', 'parrot', 'dances', 'mr', 'puffer', 'pensive', 'dyn', 'original', 'watermelon', 'middle', 'finger', 'bat', 'cursed', 'kirb', 'kirby', 'cool', 'Caught', 'day', 'the', 'caught', 'in', 'oh', 'grass', 'feels', 'wower', 'chad', 'gigachad', 'muslim', 'better', 'missing', 'cry', 'batman', 'big', 'dolphin', 'pixel', 'rainbow', 'sad', 'lemon', 'take', 'my', 'yes', 'no', 'why', 'you', 'u', 'uwu', 'crying', 'sure', 'buddy', 'frick', 'problem'];
        let inputString = link.name;

        if (!splitIntoWords(inputString, dictionary) === false) {
      	    name.textContent = splitIntoWords(inputString, dictionary)
        } else {
            name.textContent = link.name
        }
        name.className = 'emoji-name'
      	item.appendChild(name)

        const fav = document.createElement('div')
        fav.innerHTML = `
            <svg width="20" height="20" viewbox="0 0 24 24">
                <polygon id="star" points="12,0 15.09,7.24 23.14,8.62 17,14.11 18.18,22.08 12,18.22 5.82,22.08 7,14.11 0.86,8.62 8.91,7.24" stroke-linejoin="round"/>
            </svg>
        `
        fav.className = 'fav-btn'


      	const button = document.createElement('button');
     	// <i class="fa-solid fa-copy"></i>
      	button.className = 'copy-btn';
      	button.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
        
      	button.onclick = function() {
            
        navigator.clipboard.writeText(`[${link.name}](${link.url}?size=64)`).then(() => {
          	alert('Link copied to clipboard!');
        }).catch(err => {
          	console.error('Error in copying text: ', err);
        });
        
      	};

      
      	item.appendChild(a);
      	item.appendChild(button);
      	container.appendChild(item);
    }
  });
})};





  // When creating each item in the forEach loop:



  

  let knownTerms = {
    "sus": "suspicious",
    "ayo": "hello",
    "mongus": "Among Us game character",
    "thonk": "thinking face",
    "GrassBlock": "Minecraft grass block",
    "Bedrock": "Minecraft bedrock block",
    "gear": "Minecraft mechanical gear",
    "rock": "rock meme",
    "pick": "pickaxe",
    "PaperMC": "Minecraft Paper server software logo",
    "amogus": "Among Us game character",
    "no": "disagreement",
    "brumoji": "confused face",
    "nerd": "nerdy face with glasses",
    "peeposunglasses": "frog character with sunglasses",
    "peepodab": "frog character doing the dab dance move",
    "peeposweat": "nervous frog character",
    "peepoguns": "frog character holding guns",
    "peepoderp": "silly frog face",
    "peeporifle": "frog character with a rifle",
    "peepothinkpeepothink": "deeply thinking frog character",
    "feelswowerman": "sad man face",
    "peepothumbsup": "frog character giving a thumbs up",
    "peepogun": "frog character with a gun",
    "peepoblush": "blushing frog character",
    "peeposip": "frog character sipping a drink",
    "peepocringe": "cringing frog character",
    "peepostare": "staring frog character",
    "peepothumbsdown": "frog character giving a thumbs down",
    "peepothanos": "frog character as Thanos",
    "peepothink": "thinking frog character",
    "peeposalute": "saluting frog character",
    "peepokek": "laughing frog character",
    "peepotrollface": "frog character with troll face",
    "peepodead": "dead frog character",
    "mochas": "coffee cups",
    "peepobored": "bored frog character",
    "peepopray": "praying frog character",
    "peepotriggered": "angry frog character",
    "peepook": "OK gesture frog character",
    "peepouwu": "uwu face frog character",
    "_dance": "dancing character",
    "angery": "angry face",
    "killerclown": "scary clown face",
    "peepoclown": "frog character as a clown",
    "peepoyikes": "shocked frog character",
    "omg": "shocked face",
    "chadgif": "muscular man",
    "muslimgigachad": "muscular man with religious cap",
    "reverso": "reverse card",
    "dwayneeyebrow": "Dwayne 'The Rock' Johnson raising eyebrow",
    "wtfboy": "confused boy",
    "_DiCaprioLaugh": "Leonardo DiCaprio laughing",
    "ayowhat": "surprised face",
    "_bettermissingping": "missing notification",
    "crythumbsup": "crying face with thumbs up",
    "_lil_swag": "character with swag",
    "huh": "confused face",
    "_man_of_culture": "sophisticated man",
    "batmanhmm": "Batman thinking",
    "laughinghard": "laughing hard face",
    "bigbrain": "large brain, intelligence",
    "kekwlaugh": "laughing face meme",
    "fuminodepression": "angry and sad face",
    "omegalul": "laughing face meme",
    "kappa": "sarcastic face meme",
    "_rainbow_bitcoin": "rainbow colored Bitcoin",
    "goblindmf": "excited goblin character",
    "memerainbow": "rainbow with meme face",
    "discocat": "dancing cat with disco themes",
    "_dolphinparty": "dancing dolphin",
    "worldrainbow": "world globe with rainbow colors",
    "rainbowdanceblobthink": "thinking blob character dancing with rainbow",
    "rainbowbunny": "bunny with rainbow colors",
    "kittyvibe": "cat vibing",
    "_pixelrainbowdance": "pixelated among us character dancing with rainbow",
    "_hyper_vibecat": "highly energetic vibing cat",
    "rainbowpepe": "Pepe the frog with rainbow colors",
    "rainbowlegocoin": "Lego coin with rainbow colors",
    "amongusdancefast": "Among Us character dancing quickly",
    "jebspin": "spinning Jeb",
    "youtuberainbow": "YouTube logo with rainbow colors",
    "dogerainbow": "Doge meme with rainbow",
    "_Rainbow_Laugh": "laughing face with rainbow",
    "rainbowwtf": "WTF expression with rainbow colors",
    "rainbowboost": "boost or acceleration with rainbow trail",
    "rainbowpotion": "potion bottle with rainbow colors",
    "rainbowminecraftparrotdances": "Minecraft parrot dancing with rainbow colors",
    "mrparrot": "parrot",
    "rainbowpin": "pin or badge with rainbow colors",
    "pepethinkomega": "Pepe the frog thinking deeply",
    "rainbowskull": "skull with rainbow colors",
    "puffervalid": "pufferfish with approval expression",
    "kappadeal": "Kappa meme making a deal",
    "rainbowdance": "character dancing with rainbow colors",
    "wahhhhh": "crying or whining face",
    "pensivebetrayal": "pensive face with a sense of betrayal",
    "dynlove": "dynamic heart or love expression",
    "shush": "silencing or 'be quiet' gesture",
    "originalmadman": "crazy or wild character",
    "murder": "mystery or crime theme",
    "_xok_cursed": "cursed or disturbing image",
    "watermelonman": "character with watermelon theme",
    "middlefingercat": "cat giving the middle finger",
    "batcursedemoji": "bat with a cursed expression",
    "kirbykill": "Kirby character with a violent theme kill",
    "reverse": "reverse card from UNO or similar concept",
    "coolangry": "angry face trying to stay cool",
    "shy": "shy or bashful expression",
    "caughtink": "splashed or caught with ink",
    "flush": "flushed or embarrassed face",
    "dayruined": "expression of a day being ruined",
    "ohgod": "shocked or distressed exclamation",
    "sadlemonmnm": "sad lemon candy",
    "takemylove": "offering love or affection",
    "therockshocked": "Dwayne 'The Rock' Johnson looking shocked",
    "yessir": "affirmative or agreement",
    "whyucrying": "inquiring why someone is crying",
    "surebuddyfrickyou": "sarcastic agreement or dismissal",
    "typing": "indicating typing or digital communication",
    "deadmf": "dead or knocked out character",
    "problemsolved": "indicating a problem has been solved",
    "loading_animation": "loading or buffering animation"

}

const dataset = [{"name": "sus"}, {"name": "ayo"}]; // Sample data


document.getElementById('searchBox').addEventListener('input', function(e) {
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  
  function getUrlByName(array, name) {
    const item = array.find(obj => obj.name === name);
    return item ? item.url : null; // Returns null if no match is found
  }
  

  const input = e.target.value.toLowerCase();
  const filteredData = emojilinks.filter(item => knownTerms[item.name] && knownTerms[item.name].toLowerCase().includes(input));
  
  const resultsContainer = document.getElementById('results');
  console.log(resultsContainer)
  resultsContainer.innerHTML = ''; // Clear previous results
  filteredData.forEach(item => {
    const div = document.createElement('img');
    div.src = getKeyByValue(getUrlByName(emojilinks, getKeyByValue(knownTerms, knownTerms[item.name]))); // Display known term or a placeholder
    console.log(getUrlByName(emojilinks, getKeyByValue(knownTerms, knownTerms[item.name])) || 'Unknown term')
    resultsContainer.appendChild(div);
  });

  

  // If no results found
  if(filteredData.length === 0) {
    const noResults = document.createElement('p');
    noResults.textContent = 'No matches found.';
    resultsContainer.appendChild(noResults);
  }
});


  document.getElementById('checkbox').addEventListener('change', function(event){
    document.body.classList.toggle('dark-mode', event.target.checked);
});

function fullyEncodeData(links, ver) {
  let encodedLinks = unicodeToBase64(JSON.stringify(links)) || '';
  let encodedVer = unicodeToBase64(JSON.stringify(ver)) || '';
  // Using the correct separator
  let encoded = `${encodedLinks}─${encodedVer}`;
  return encoded;
}


// Example of encoding and saving data
function saveEncodedData(data) {
  const encodedData = encodeData(data);
  saveToFile(encodedData, 'data.dismoji');
}

// Utility function for encoding data
function encodeData(data) {
  try {
      const jsonData = JSON.stringify(data);
      return btoa(jsonData);
  } catch (e) {
      console.error("Failed to encode data:", e);
      return '';
  }
}

function unicodeToBase64(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, 
      (match, p1) => String.fromCharCode('0x' + p1)));
}

function base64ToUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(
      (c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
}


// Function to trigger the download of encoded data
function saveToFile(encodedData, filename) {
  const blob = new Blob([encodedData], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Example of loading and decoding data
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) {
      console.log("No file selected.");
      return;
  }
}



document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (!file) {
      console.log("No file selected.");
      return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
      const fileContent = e.target.result;
      const parts = fileContent.split('─');
      if (parts.length === 2) {
          try {
              // Decode and parse the links and version from the file
              const decodedLinks = JSON.parse(base64ToUnicode(parts[0]));
              const decodedVer = JSON.parse(base64ToUnicode(parts[1]));

              // Update global variables
              links = decodedLinks;
              ver = decodedVer;

              loadLinks()

              console.log("Loaded and decoded links:", links);
              console.log("Loaded and decoded version:", ver);
          } catch (err) {
              console.error("Error decoding and parsing data:", err);
          }
      } else {
          console.log('File content does not follow the expected format.');
      }
  };
  reader.readAsText(file);
});
