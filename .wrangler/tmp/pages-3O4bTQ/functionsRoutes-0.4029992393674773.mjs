import { onRequest as __api_gemini_js_onRequest } from "C:\\Users\\Kanujan\\Desktop\\Projects\\Textify\\Textify\\functions\\api\\gemini.js"
import { onRequest as __api_image_js_onRequest } from "C:\\Users\\Kanujan\\Desktop\\Projects\\Textify\\Textify\\functions\\api\\image.js"
import { onRequest as __api_pexels_js_onRequest } from "C:\\Users\\Kanujan\\Desktop\\Projects\\Textify\\Textify\\functions\\api\\pexels.js"

export const routes = [
    {
      routePath: "/api/gemini",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_gemini_js_onRequest],
    },
  {
      routePath: "/api/image",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_image_js_onRequest],
    },
  {
      routePath: "/api/pexels",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_pexels_js_onRequest],
    },
  ]