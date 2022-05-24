import { addParticipant } from '../fetch-utils.js';

const addParticipantForm = document.getElementById('participant-form');
const selectWorkshop = document.getElementById('select-workshops');

async function onLoad() {
    const workshops = await getWorkshops();

}