import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter.inputValue;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectSortedAlphabetically = state =>
  state.filter.sortedAlphabetically;

export const selectContactsCount = createSelector(
  [selectContacts],
  contacts => {
    return contacts.reduce(
      (count, contact) => {
        if (contact.error) {
          console.log(contact.error);
        }
        count.total++;
        return count;
      },
      { total: 0 }
    );
  }
);

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
