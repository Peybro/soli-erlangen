import * as React from "react";

import Layout from "../layouts/layout";

import Alert from "react-bootstrap/Alert";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";
import db from "./../services/firebase";

export default function Set() {
  const [enabled, setEnabled] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [bgColor, setBgColor] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [infoAlert, setInfoAlert] = React.useState(false);

  React.useEffect(() => {
    getSettings();
  }, []);

  function setNewSettings() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, "vorstand@soli-erlangen.de", pw)
      .then(async (userCredential) => {
        //? Signed in
        // const user = userCredential.user;
        // console.log(user);
        await setDoc(doc(db, "banner", "settings"), {
          enabled: enabled,
          title: title,
          description: description,
          bgColor: bgColor,
        });

        setInfoAlert(true);
        setTimeout(() => {
          setInfoAlert(false);
        }, 5000);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        alert("Falsches Passwort!");
      });
  }

  async function getSettings() {
    const docRef = doc(db, "banner", "settings");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setEnabled(docSnap.data().enabled);
      setTitle(docSnap.data().title);
      setDescription(docSnap.data().description);
      setBgColor(docSnap.data().bgColor);
    } else {
      console.log("No such document!");
    }
  }

  return (
    <Layout pageTitle="Bannersettings">
      <div className="container mt-2">
        <Alert variant={bgColor} dismissible>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Titel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Beschreibung"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Alert>

        <div className="border p-2">
          <div className="form-check form-switch float-end">
            <input
              className="form-check-input"
              type="checkbox"
              id="enabled"
              checked={enabled}
              onChange={() => setEnabled(!enabled)}
            />
            <label className="form-check-label" htmlFor="enabled">
              Anzeigen?
            </label>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Hintergrund</span>
            <select
              className="form-select"
              onChange={(e) => setBgColor(e.target.value)}
              value={bgColor}
            >
              <option value="success">Grün</option>
              <option value="warning">Gelb</option>
              <option value="danger">Rot</option>
              <option value="primary">Blau</option>
            </select>
          </div>

          {infoAlert && <Alert variant="info">Speichern erfolgreich.</Alert>}

          <div className="input-group">
            <input
              type="password"
              className="form-control"
              placeholder="Passwort"
              onChange={(e) => setPw(e.target.value)}
            />
            <button
              className="btn btn-secondary"
              onClick={() => setNewSettings()}
              disabled={pw === ""}
            >
              Speichern
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
