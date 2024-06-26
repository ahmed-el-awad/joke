async function getJoke() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        console.log(response);
        const jsonData = await response.json();
        console.log(jsonData);

        const id = jsonData["id"];
        const setup = jsonData["setup"];
        const punchline = jsonData["punchline"];

        console.log(`${id}: ${setup} ${punchline}`);
        return { id, setup, punchline };
    } catch (err) {
        console.error(err.message);
    }
}

async function updateHTML() {
    const { id, setup, punchline } = await getJoke();

    document.querySelector("#joke-id").innerHTML = `#${id}`;
    document.querySelector("#joke-section").innerHTML = `${setup} ${punchline}`;
}

updateHTML();
