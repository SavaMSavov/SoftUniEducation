const url = 'https://exercise-bedba.firebaseio.com/catches/';

let requests = {
    getAll: async () => {
        return await fetch(`${url}.json`)
        .then(e => e.json());
    },
    createCatch: async (c) => {
        return await fetch(`${url}.json`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(c)
        })
        .then(e => e.json())
        .then(e => e['name']);
    },
    updateCatch: async (id, c) => {
        fetch(`${url}/${id}.json`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(c)
        });
    },
    deleteCatch: async (id) => {
        fetch(`${url}/${id}.json`, {
            method: "DELETE"
        });
    }
}
let loadButton = document.querySelector('.load');
loadButton.addEventListener('click', async () => {
    let allCatches = await requests.getAll();
    Object.keys(allCatches).forEach(c => {
        renderCatch(allCatches[c]['angler'], allCatches[c]['weight'], allCatches[c]['species'],
        allCatches[c]['location'], allCatches[c]['bait'], allCatches[c]['captureTime'], c);
    });
});
let [anglerInput, weightInput, speciesInput, locationInput, baitInput, captureTimeInput]
= document.querySelectorAll('#addForm input');
let catchesSection = document.querySelector('#catches');
let addButton = document.querySelector('#addForm button');
addButton.addEventListener('click', async (e) => {
    e.preventDefault();
    let angler = anglerInput.value;
    let weight = weightInput.value;
    let species = speciesInput.value;
    let location = locationInput.value;
    let bait = baitInput.value;
    let captureTime = captureTimeInput.value;
    let id = await requests.createCatch({angler, weight, species, location, bait, captureTime});
    renderCatch(angler, weight, species, location, bait, captureTime, id);
});

async function renderCatch(angler, weight, species, location, bait, captureTime, id) {
    let catchDiv = document.createElement('div');
    catchDiv.setAttribute('class', 'catch');
    catchDiv.setAttribute('data-id', '<id-goes-here>');
    catchDiv.innerHTML = `<label>Angler</label>
    <input type="text" class="angler" value="${angler}" />
    <hr>
    <label>Weight</label>      
    <input type="number" class="weight" value="${weight}" />
    <hr>
    <label>Species</label>
    <input type="text" class="species" value="${species}" />
    <hr>
    <label>Location</label>
    <input type="text" class="location" value="${location}" />
    <hr>
    <label>Bait</label>
    <input type="text" class="bait" value="${bait}" />
    <hr>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${captureTime}" />
    <hr>
    <button class="update">Update</button>
    <button class="delete">Delete</button>`;
    
    let [updateButton, deleteButton] = catchDiv.querySelectorAll('button');
    updateButton.addEventListener('click', async () => {
        let [a, w, s, l, b, c] = [...catchDiv.querySelectorAll('input')].map(e => e.value);
    angler = a;
    weight = w;
    species = s;
    location = l;
    bait = b;
    captureTime = c;
        requests.updateCatch(id, {angler, weight, species, location, bait, captureTime});
    });
    deleteButton.addEventListener('click', () => {
        requests.deleteCatch(id);
        catchesSection.removeChild(catchDiv);
    })
    catchesSection.appendChild(catchDiv);
}