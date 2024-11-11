import axios from "axios";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const q = await axios({
    method: "get",
    url: `${import.meta.env.VITE_CMS_API}/projects?filters[slug][$eq]=${
      params.slug
    }&populate[0]=tech_stacks&populate[1]=picture&populate[2]=tech_stacks.picture`,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_CMS_TOKEN}`,
    },
  });

  return {
    project: q.data.data[0],
  };
};
