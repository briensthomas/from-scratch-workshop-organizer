import { checkAuth, deleteParticipant, getWorkshops, logout } from '../fetch-utils.js';
import { renderWorkshop } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const addParticipantButton = document.getElementById('add-participant');

logoutButton.addEventListener('click', () => {
    logout();
});



async function displayWorkshops() {
    const main = document.querySelector('main');
    main.textContent = '';
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const workshopDiv = renderWorkshop(workshop);

        const ul = document.createElement('ul');
        for (let participant of workshop.Participants) {
            const li = document.createElement('li');
            li.textContent = `${participant.name}: ${participant.contact}`;
            li.addEventListener('click', async() => {
                await deleteParticipant(participant.id);
                await displayWorkshops();
            });

            ul.append(li);
        }

        workshopDiv.append(ul);
        main.append(workshopDiv);
    }

}

displayWorkshops();

addParticipantButton.addEventListener('click', () => {
    window.location.href = '../add-participants';
});