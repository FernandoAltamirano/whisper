import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

import { useStateValue } from "../context/ContextProvider";
import { db } from "../firebase";

function useWhispers(key) {
  const [{ user }, dispatch] = useStateValue();
  const [whispers, setWhispers] = useState([]);
  const [realtimeData, loading] = useCollection(
    db.collection("whispers").orderBy("date", "desc")
  );
  useEffect(() => {
    if (key) {
      setWhispers(
        realtimeData?.docs.filter(
          (whisper) => whisper.data().username === user.username
        )
      );
    } else {
      setWhispers(realtimeData?.docs.map((whisper) => whisper));
    }
  }, [realtimeData]);

  return { whispers, loading };
}

export default useWhispers;
