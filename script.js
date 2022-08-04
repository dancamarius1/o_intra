
// initializare tooltipuri

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new boosted.Tooltip(tooltipTriggerEl))