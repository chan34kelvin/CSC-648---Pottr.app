import { useState, useEffect } from "react";
import { PostAPI } from "../services/PostAPI.js";

export default function useWinningPost(id) {
  const [winningPost, setWinningPost] = useState(() => []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchWinningPost = async () => {
      try {
        setIsLoading(true);
        const data = await PostAPI.ifWin(id);
        setWinningPost(data[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchWinningPost();
  }, [id]);

  return { winningPost, isLoading };
}