import { addParticipant, getWorkshops } from '../fetch-utils.js';
import { renderSelectOptions } from '../render-utils.js';

const addParticipantForm = document.getElementById('participant-form');
const workshopSelect = document.getElementById('select-workshops');

async function onLoad() {
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const workshopOption = renderSelectOptions(workshop);
        workshopSelect.append(workshopOption);
    }
}
onLoad();

addParticipantForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(addParticipantForm);
    await addParticipant({
        name: data.get('name'),
        contact: data.get('contact'),
        workshop_id: data.get('workshop_id')
    });
    window.location.href = '../workshops-page';
});
