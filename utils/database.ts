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
import { SchemaType as login } from '~/schema/login';

const useDatabase = (table: 'doctors' | 'users') => {
  const addData = async (data: SchemaType | login ) => {
    try {
      const fireStoreData = await addDoc(collection(db, table), data);
      return fireStoreData;
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async (id: string, data: SchemaType) => {
    const userDocRef = doc(db, table, id);
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
    const usersRef = collection(db, table);
    const result = await getDocs(usersRef);
    return result;
  };

  const selectData = async (email: string) => {
    const userRef = collection(db, table);
    const q = query(userRef, where('email', '==', email));
    const result = await getDocs(q);
    return result;
  };

  const deleteData = async (id: string) => {
    if (!id) return;
    await deleteDoc(doc(db, table, id));
  };

  return { addData, updateData, selectAllData, selectData, deleteData };
};

export { useDatabase };
