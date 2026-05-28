import { useState, useEffect } from "react";
import { PostAPI } from "../services/PostAPI.js";

export default function usePosts(id) {
  const [posts, setPosts] = useState(() => []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const data = await PostAPI.get(id);
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, [id]);

  return { posts, isLoading };
}