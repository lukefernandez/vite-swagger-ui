import SwaggerUI from "swagger-ui";
import SwaggerUIStandalonePreset from "swagger-ui/dist/swagger-ui-standalone-preset";
import "swagger-ui/dist/swagger-ui.css";

SwaggerUI({
  urls: [
    { url: "./specs/petstore.json", name: "Pet Store — JSON" },
    {
      url: "./specs/petstore.yaml",
      name: "Pet Store — YAML",
    },
  ],
  dom_id: "#app",
  deepLinking: true,
  presets: [SwaggerUI.presets.apis, SwaggerUIStandalonePreset],
  layout: "StandaloneLayout",
});
