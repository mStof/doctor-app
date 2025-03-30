import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

import { db } from './firebase';

import { SchemaType } from '~/schema/formOne';

const useDatabase = () => {
  const addData = async (data: SchemaType) => {
    try {
      const fireStoreData = await addDoc(collection(db, 'doctors'), data);
      return fireStoreData;
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async (id: string, data: SchemaType) => {
    const userDocRef = doc(db, 'doctors', id);
    await updateDoc(userDocRef, {
      nome: data.name,
      email: data.email,
      cpf: data.cpf,
      rg: data.rg,
      password: data.password,
      number: data.number,
    });
  };

  const selectAllData = async () => {
    const usersRef = collection(db, 'doctors');
    const result = await getDocs(usersRef);
    return result;
  };

  const selectData = async (email: string) => {
    const userRef = collection(db, 'doctors');
    const q = query(userRef, where('email', '==', email));
    const result = await getDocs(q);
    return result;
  };

  const deleteData = async (id: string) => {
    if (!id) return;
    await deleteDoc(doc(db, 'doctors', id));
  };

  return { addData, updateData, selectAllData, selectData, deleteData };
};

export { useDatabase };
