import { db } from '../firebase/firebase-config';

export const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/journal/notes`).get();
  const notes = [];

  notesSnap.forEach((snapHijo) => {
    //console.log(snapHijo);
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });

  return notes;
};
