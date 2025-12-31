import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../lib/firebase";

export default async function Home() {
  const db = getFirestore(app);
  const ref = doc(db, "settings", "site");
  const snap = await getDoc(ref);
  const data = snap.exists() ? snap.data() : null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <h1 className="text-4xl font-bold text-black dark:text-white">
        {data ? data.title : "Veri bulunamadı"}
      </h1>
    </div>
  );
}
