import React, { useState, useEffect } from 'react'
import { db } from '../firebaseConfig/initialise.js'
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytes } from "firebase/storage";

export default function MainProvider(props) {
    const storage = getStorage();
    const [category, setCategory] = useState([]);
    const [training, setTraining] = useState([]);
    const [job, setJobs] = useState([]);
    const [company, setCompany] = useState({})



    const getDocument = async (document, setDocument = setCategory) => {
        const documentCol = collection(db, document);
        await getDocs(documentCol).then(
            (documentSnapshot) => {
                const documentList = documentSnapshot.docs.map(doc => {
                    let data = doc.data()
                    let id = doc.id
                    return { ...data, id: id }
                });
                setDocument(documentList);
            }
        )
    }

    const getDocumentArray = async (document, setDocument = setCategory) => {
        const documentCol = collection(db, document);
        await getDocs(documentCol).then(
            (documentSnapshot) => {
                const documentArray = {}
                documentSnapshot.docs.map(doc => {
                    let data = doc.data()
                    let id = doc.id
                    documentArray[id] = { ...data, id: id }
                });
                setDocument(documentArray);
            }
        )
    }

    const addToDocument = async (document, FORM_DATA, useStorage = false, file = "", fileName = "", folder = "cv") => {

        if (useStorage) {

            const storageRef = ref(storage, `${folder}/${fileName}`);
            // 'file' comes from the Blob or File API
            return uploadBytes(storageRef, file).then(async (snapshot) => {
                console.log('Uploaded a blob or file!');
                console.log(snapshot)

                return addDoc(
                    collection(db, document), FORM_DATA
                ).then(docRef => {
                    return {
                        success: true,
                        data: docRef,
                        file: snapshot
                    }
                })

            }).catch(
                () => {
                    return {
                        success: false,
                        message: "Error Uploading Image"
                    }
                }
            );
        } else {
            const docRef = await addDoc(
                collection(db, document), FORM_DATA
            )
            return {
                success: true,
                data: docRef
            }
        }
    }

    useEffect(() => {
        getDocument('category', setCategory)
        getDocument('training', setTraining)
        getDocument('jobs', setJobs)
        getDocumentArray('company', setCompany)
    }, [])
    return (
        <mainFunctions.Provider
            value={{
                category,
                training,
                job,
                company,
                addToDocument
            }}
        >
            {props.children}
        </mainFunctions.Provider>
    )
}

export const mainFunctions = React.createContext()