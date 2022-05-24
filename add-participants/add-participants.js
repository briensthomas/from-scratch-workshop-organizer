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