export function renderWorkshop(workshop) {
    const workshopDiv = document.createElement('div');
    workshopDiv.classList.add('workshops');

    const workshopTitle = document.createElement('h2');
    workshopTitle.textContent = workshop.course_name;

    workshopDiv.append(workshopTitle);
    return workshopDiv;
}