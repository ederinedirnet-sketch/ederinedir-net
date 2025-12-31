import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./../lib/firebase";

import Image from "next/image";

export default async function Home() {
  const db = getFirestore(app);
  const ref = doc(db, "settings", "site");
  const snap = await getDoc(ref);
  const data = snap.exists() ? snap.data() : null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <h1 className="text-3xl font-bold text-black dark:text-white">
          {data ? data.title : "Veri bulunamadı"}
        </h1>

      </main>
    </div>
  );
}
