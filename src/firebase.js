import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { config } from "./config";

const firebaseConfig = config;
firebase.apps.length < 1 && firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
const auth = firebase.auth();

export const signOut = () => {
  return auth.signOut();
};
//AUTH
export const registerUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};
export const loginUser = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};
export const onAuthStateChanged = (onChange) => {
  return auth.onAuthStateChanged((user) => {
    user && getToFirestore(user.email).then((user) => onChange(user));
  });
};

//FIRESTORE
export const sendToFirestore = (user) => {
  const date = firebase.firestore.Timestamp.fromDate(new Date());
  const data = { ...user, date };
  return db.collection("users").add(data);
};

export const getToFirestore = async (email) => {
  if (!new Intl.DateTimeFormat()) {
    await import("@formatjs/intl-datetimeformat");
  }
  return db
    .collection("users")
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { ...data, id };
      })
    )
    .then((data) => data.filter((doc) => doc.email === email))
    .then((user) => {
      const { date } = user[0];
      const formattedDate = new Intl.DateTimeFormat("es-ES").format(
        new Date(date.seconds * 1000)
      );

      return { ...user[0], date: formattedDate };
    });
};

export const userExist = async (user) => {
  const result = await db
    .collection("users")
    .where("username", "==", user)
    .get();
  return result.docs.map((user) => user.data());
};

export const sendWhisper = (data) => {
  const date = firebase.firestore.Timestamp.fromDate(new Date());
  return db.collection("whispers").add({ ...data, date });
};

export const getWhisper = async (username) => {
  let res = {};
  if (username) {
    res = await db
      .collection("whispers")
      .where("username", "==", username)
      .orderBy("date", "desc")
      .get();
  } else {
    res = await db
      .collection("whispers")
      .orderBy("date", "desc")
      .limit(20)
      .get();
  }

  return res.docs.map((tweet) => {
    const data = tweet.data();
    const { date } = data;
    const id = tweet.id;
    return { ...data, id, date: +date.toDate() };
  });
};

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`/images/${file.name}`);
  const task = ref.put(file);
  return task;
};

export const updateImageProfile = (image, id) => {
  return db.collection("users").doc(id).update({ image: image });
};

export const getAllTweets = () => {
  return db.collection("whispers").get();
};
