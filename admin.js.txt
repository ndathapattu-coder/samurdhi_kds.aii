import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const container = document.getElementById("data");

// 🔐 AUTH CHECK (MAIN SECURITY)
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    loadData();
  }
});

// 🚪 LOGOUT
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
};

// 📊 LOAD DATA
async function loadData() {
  container.innerHTML = "";

  const snap = await getDocs(collection(db, "applications"));

  snap.forEach((docItem) => {
    const data = docItem.data();

    container.innerHTML += `
      <div style="border:1px solid #ccc; margin:10px; padding:10px;">
        <p><b>Name:</b> ${data.name}</p>
        <p><b>NIC:</b> ${data.nic}</p>
        <p><b>Status:</b> ${data.status}</p>

        <button onclick="approve('${docItem.id}')">Approve</button>
        <button onclick="reject('${docItem.id}')">Reject</button>
        <button onclick="removeDoc('${docItem.id}')">Delete</button>
      </div>
    `;
  });
}

// ✔ APPROVE
window.approve = async (id) => {
  await updateDoc(doc(db, "applications", id), {
    status: "approved"
  });
  loadData();
};

// ❌ REJECT
window.reject = async (id) => {
  await updateDoc(doc(db, "applications", id), {
    status: "rejected"
  });
  loadData();
};

// 🗑 DELETE
window.removeDoc = async (id) => {
  await deleteDoc(doc(db, "applications", id));
  loadData();
};