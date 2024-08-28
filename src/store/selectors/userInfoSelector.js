const userSelector = (state) => state.profile.loggedUser;

const ticketsSelector = (state) => state.profile.loggedUser.reservedTickets;

export { userSelector, ticketsSelector };
