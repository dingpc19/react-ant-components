import { useEffect, useState } from "react";
import axios from "axios";
const useURLLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      setData(res.data);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return [data, loading];
};
export default useURLLoader;
