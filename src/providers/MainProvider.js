import React, { useState, useEffect } from 'react'
import { db, app } from '../firebaseConfig/initialise.js'
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import {useNavigate} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";

export default function MainProvider(props) {

    const auth = getAuth(app);
    const navigate = useNavigate();
    const storage = getStorage();
    const [category, setCategory] = useState([]);
    const [training, setTraining] = useState([]);
    const [job, setJobs] = useState([]);
    const [jobList, setJobList] = useState({});
    const [trainingList, setTrainingList] = useState({});
    const [company, setCompany] = useState([])
    const [registerations, setRegisterations] = useState([])
    const [applications, setApplications] = useState([])
    const [userregisterations, setUserRegisterations] = useState([])
    const [userapplications, setUserApplications] = useState([])
    const [messages, setMessages] = useState([])
    const [thisuser, setUser] = useState({})
    const [msg, setMsg] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const signin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                setMsg("User logged in successfully")
                navigate('/user/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorMessage)
            });
    }

    const handleLogout = (email, password) => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            setUser({})
            console.log("Signed out successfully")
        }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorMessage)
        });
    }

    const register = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setMsg("User Created, Login with user details")
                navigate('/login')

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorMessage)
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
        ).catch((err)=>{
            setErrorMsg(err.message)
        })
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
        ).catch((err)=>{
            setErrorMsg(err.message)
        })
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
                    setMsg('application submitted')
                    return {
                        success: true,
                        data: docRef,
                        file: snapshot
                    }
                }).catch(
                    (err)=>{
                        console.log(err)
                        setErrorMsg(err.message)
                    }
                )

            }).catch((err)=>{
                setErrorMsg(err.message)
            })
        } else {
            console.log(FORM_DATA, document)
            return addDoc(
                collection(db, document), FORM_DATA
            ).then(docRef =>{
                return {
                    success: true,
                    data: docRef
                }
            }).catch((err)=>{
                setErrorMsg(err.message)
            })
             
        }
    }

    useEffect(() => {
        getDocument('category', setCategory)
        getDocument('training', setTraining)
        getDocument('jobs', setJobs)
        getDocumentArray('company', setCompany)
        getDocumentArray('jobs', setJobList)
        getDocumentArray('training', setTrainingList)
        
    }, [])

    useEffect(()=>{
        if(registerations.length > 0 && typeof thisuser.uid !== "undefined"){
            let m = registerations.filter((u)=>{
                if(u.uid === thisuser.uid){
                    return true
                }else{
                    return false
                }
            })

            setUserRegisterations(m)
        }
    },[thisuser, registerations])

    useEffect(()=>{
        if(applications.length > 0 && typeof thisuser.uid !== "undefined"){
            let m = applications.filter((u)=>{
                if(u.uid === thisuser.uid){
                    return true
                }else{
                    return false
                }
            })

            setUserApplications(m)
        }
    },[thisuser, applications])


    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              console.log("uid", uid)
              setUser(user)
            }
          });
         
    }, [])
    return (
        <mainFunctions.Provider
            value={{
                category,
                training,
                trainingList,
                job,
                jobList,
                company,
                addToDocument,
                applications,
                registerations,
                setRegisterations,
                setApplications,
                getDocumentArray,
                messages, 
                msg,
                setMsg,
                errorMsg, 
                setErrorMsg,
                getDocument,
                setMessages,
                signin,
                register,
                handleLogout,
                thisuser,
                userregisterations,
                userapplications
            }}
        >
            {props.children}
        </mainFunctions.Provider>
    )
}

export const mainFunctions = React.createContext()