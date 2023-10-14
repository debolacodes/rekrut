import React, { useState, useEffect } from 'react'
import { db, app } from '../firebaseConfig/initialise.js'
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytes } from "firebase/storage";

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
export default function MainProvider(props) {

    const auth = getAuth(app);
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/auth.user
    //         const uid = user.uid;
    //         // ...
    //     } else {
    //         // User is signed out
    //         // ...
    //     }
    // });
    const storage = getStorage();
    const [category, setCategory] = useState([]);
    const [training, setTraining] = useState([]);
    const [job, setJobs] = useState([]);
    const [company, setCompany] = useState([])
    const [registerations, setRegisterations] = useState([])
    const [applications, setApplications] = useState([])

    const signin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

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
            console.log(FORM_DATA, document)
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
                addToDocument,
                applications,
                registerations,
                setRegisterations,
                setApplications,
                getDocumentArray
            }}
        >
            {props.children}
        </mainFunctions.Provider>
    )
}

export const mainFunctions = React.createContext()