
const user = {
  name: 'Gustavo Murdiga',
  height: 190,
  hasTicket: true,
};

const NECESSARY_HEIGHT_TO_ENTER_ON_TOY = 130;

const CURRENT_HOUR = new Date().getHours();

const parkIsOpen = CURRENT_HOUR > 9 && CURRENT_HOUR < 18;

if (!parkIsOpen) {
  throw new Error('O parque está fechado!')
}

const userHasAnTicket = user.hasTicket;

if (!userHasAnTicket) {
  throw new Error('O Gustavo não possui um bilhete para entrar no parque!')
}

const userCanEnterToToy = user.height > NECESSARY_HEIGHT_TO_ENTER_ON_TOY;

if (!userCanEnterToToy) {
  throw new Error('O Gustavo não pode entrar no brinquedo!')
}

console.log('O Gustavo se divertiu muito! :)')